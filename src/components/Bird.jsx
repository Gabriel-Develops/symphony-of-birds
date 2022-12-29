const Bird = ({name, audioUrl, picUrl}) => {
    return  <div id="bird" style={{backgroundImage: `url(${picUrl})`}}>
        <h3>{name}</h3>
        <audio autoPlay loop src={audioUrl}></audio>
    </div>
}

export default Bird