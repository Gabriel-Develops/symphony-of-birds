import {useState} from 'react'

const BirdForm = ({ setQuery }) => {
    const [BirdName, setBirdName] = useState('')

    return (
        <form onSubmit={e => {
            e.preventDefault()
            setQuery(BirdName)
            setBirdName('')
          }}
            id="bird-form">
            <input value={BirdName}
               onChange={ e => setBirdName(e.target.value)} 
               placeholder="Search for Birds!" 
        />
        <button type='submit'>Add to Symphony</button>
        </form>
    )
}

export default BirdForm