function Track(props) {
    const track = props.track

    return (
      <li key={`track${document.getElementsByClassName("Track").length+1}`} className="Track">
        <img src={track.album.images[0].url}/>
        <strong>{track.name}</strong>
      </li>       
    );
  }
  
  export default Track;