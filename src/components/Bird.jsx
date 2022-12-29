const Bird = ({name, audioUrl, picUrl}) => {
    return  <div id="bird" style={{backgroundImage: `url(${picUrl})`}}>
        <h2>{name}</h2>
        <audio autoPlay loop src={audioUrl}></audio>
    </div>
}

export default Bird