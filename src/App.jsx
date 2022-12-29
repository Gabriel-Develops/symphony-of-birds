import { useState, useEffect } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import BirdForm from './components/BirdForm.jsx'
import Bird from './components/Bird.jsx'
import backgroundNoise from './sounds/background-rainforest.wav'

function App() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [modal, setModal] = useState(false)

  useEffect( () => {
    async function fetchData() {
      console.log('hit')
      if (!query) return

      try {
        const response = await fetch(`https://xeno-canto.org/api/2/recordings?query=${query}`)
        const json = await response.json()
        
        const picResponse = await fetch(`https://customsearch.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_API_KEY}&cx=${process.env.REACT_APP_BROWSER_KEY}&searchType=image&num=1&rights=cc_publicdomain&q=${json.recordings[0].en}`)
        const picJson = await picResponse.json()

        setResults(prevResults => [...prevResults, {
          id: json.recordings[0].id,
          name: json.recordings[0].en,
          audioUrl: json.recordings[0].file,
          picUrl: picJson.items[0].link
        }])
      } catch(e) {
        console.error(e)
      }
    }
    fetchData()
  }, [query])
  
  return (
    <main className="App">
      <audio autoPlay loop src={backgroundNoise}></audio>
      <Header title="Symphony of Birds" buttonText="?" modal={modal} setModal={setModal}/>
      <BirdForm setQuery={setQuery}/>
      <section id="birds">
        {results.map(item => (
          <Bird key={item.id} name={item.name} audioUrl={item.audioUrl} picUrl={item.picUrl} id={item.id} results={results} setResults= {setResults}/>
        ))}
      </section>
      {modal ? <Modal modal={modal} setModal={setModal}/> : 'No!'}
    </main>
  )
}

export default App;
