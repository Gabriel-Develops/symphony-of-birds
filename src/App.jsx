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

  // Hooks
  useEffect( () => {
    async function fetchData() {  
      if (!query) return

      try {
        // FETCH API
        const response = await fetch(`https://symphony-of-birds.onrender.com/api/${query}`)
        const json = await response.json()

        // Prevents duplicates
        if (results.find(bird => bird.id === json.id)) return

        // Clears query and results are updated with previous results
        setQuery('')
        setResults(prevResults => [...prevResults, {
          id: json.id,
          name: json.name,
          audioUrl: json.audioUrl,
          picUrl: json.picUrl
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
      {modal && <Modal modal={modal} setModal={setModal}/>}
    </main>
  )
}

export default App;
