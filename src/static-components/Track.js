import './Track.css';
function Track(props) {
    const track = props.track
    const handleClick = props.handleClick
    const functionType = props.functionType
    var trackName = track.name
    if(trackName.indexOf('(') > -1){
        trackName = trackName.substring(0, trackName.indexOf('('))
    }
    if(trackName.length>28){
        trackName = trackName.substring(0, 26) + '...'
    }

    return (
      <li key={`track${document.getElementsByClassName("Track").length+1}`} className="Track">
        <img src={track.album.images[0].url}/>
        <p><strong>{trackName}</strong><br/>by {track.artists[0].name}</p>
        <button onClick={handleClick}>{functionType}</button>
      </li>       
    );
  }
  
  export default Track;