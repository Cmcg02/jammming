import Track from "./Track";

function Playlist(props) {
  const playlistTracks = props.playlistTracks 
  const setPlaylistTracks = props.setPlaylistTracks;
  const setPlaylistName = props.setPlaylistName;
  const setPlaylistDescription = props.setPlaylistDescription;
  const setSearchInput = props.setSearchInput;
  const searchInput = props.searchInput;

  const removeSong = (track) => {
    console.log(track)

    var tempPlaylist = playlistTracks;
    const index = tempPlaylist.indexOf(track);
    if (index > -1) {
      tempPlaylist.splice(index, 1);
    }
    setPlaylistTracks(tempPlaylist)
    console.log(tempPlaylist)
    setSearchInput(searchInput + ' ')
  }

  return (
    <div className="Playlist">
      <input
        className="text-input"
        placeholder='Playlist Name'
        type='text'
        onChange={event => setPlaylistName(event.target.value)}
      />
      <input
        className="text-input"
        placeholder='Playlist Description'
        type='text'
        onChange={event => setPlaylistDescription(event.target.value)}
      />

      {playlistTracks?playlistTracks.map(track=> {
        return (<Track track={track} handleClick={()=>{removeSong(track)}} functionType='-'/>)
      }):""}
    </div>
  );
}
  
export default Playlist;