import { useEffect } from "react";
import Track from "./Track";
import './searchResult.css';

function SearchResults(props) {
    const searchResults = props.searchResults;     
    const playlistTracks = props.playlistTracks;
    const setPlaylistTracks = props.setPlaylistTracks;
    const setSearchInput = props.setSearchInput;
    const searchInput = props.searchInput

    const addSong = (track) => {
      let tempPlaylist = playlistTracks
      let tempInput = searchInput
      tempPlaylist.push(track)

      
      setSearchInput(searchInput + ' ')

    }

    return (
      <div className="SearchResults">
            {searchResults?searchResults.map(track=> {
                return (<Track track={track} handleClick={() => {addSong(track)}} functionType='+'/>)
            }):""}
      </div>
    );
  }
  
  export default SearchResults;