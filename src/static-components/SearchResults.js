import { useEffect } from "react";
import Track from "./Track";

function SearchResults(props) {
    const searchResults = props.searchResults;     
    const playlistTracks = props.playlistTracks;
    const setPlaylistTracks = props.setPlaylistTracks;

    const addSong = (track) => {
        let tempPlaylist = playlistTracks
        tempPlaylist.push(track)
        setPlaylistTracks(tempPlaylist)
    }

    return (
      <div className="SearchResults">
            {searchResults?searchResults.map(track=> {
                return (<><Track track={track}/> <button onClick={() => addSong(track)}>+</button></>)
            }):""}
      </div>
    );
  }
  
  export default SearchResults;