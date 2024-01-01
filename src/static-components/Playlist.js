import Track from "./Track";

function Playlist(props) {
  const playlistTracks = props.playlistTracks 
  //[{name:'smells', artists : [{name: 'nirvana'}], album: {images: [{url: '#'}]}}];
  const setPlaylistTracks = props.setPlaylistTracks;

  return (
    <div className="Playlist">
      {playlistTracks?playlistTracks.map(track=> {
        return (<Track track={track} handleClick={()=>{console.log(track)}} functionType='-'/>)
      }):""}
    </div>
  );
}
  
export default Playlist;