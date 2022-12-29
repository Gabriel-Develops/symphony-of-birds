const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config()

app.use(cors())
app.use(morgan('dev'))

app.get('/api/:birdQuery', async (req, res) => {
    const response = await fetch(`https://xeno-canto.org/api/2/recordings?query=${req.params.birdQuery}`)
    const json = await response.json()

    // Google Custom Search API - You can generate yours here https://console.developers.google.com/apis/
    // Google Search Engine - You can create a browser here https://cse.google.fr/cse/all
    const picResponse = await fetch(`https://customsearch.googleapis.com/customsearch/v1?key=${process.env.CUSTOM_SEARCH_API_KEY}&cx=${process.env.SEARCH_ENGINE_ID}&searchType=image&num=1&rights=cc_publicdomain&q=${json.recordings[0].en}`)
    const picJson = await picResponse.json()

    res.json({
        id: json.recordings[0].id,
        name: json.recordings[0].en,
        audioUrl: json.recordings[0].file,
        picUrl: picJson.items[0].link
    })
})

const PORT = process.env.PORT || 2121
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`)
})