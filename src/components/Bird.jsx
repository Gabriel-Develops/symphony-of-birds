const Bird = ({name, audioUrl, picUrl, id, results, setResults}) => {
    const deleteBird = () => {
        const filteredBirds = results.filter(bird => bird.id !== id)
        setResults(filteredBirds)
    }

    return  <div id="bird" style={{backgroundImage: `url(${picUrl})`}} onClick={deleteBird}>
        <h2>{name}</h2>
        <audio autoPlay loop src={audioUrl}></audio>
    </div>
}

export default Bird