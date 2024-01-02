import { useEffect } from "react";
import Track from "./Track";
import './searchResult.css';

function SearchResults(props) {
    const searchResults = props.searchResults;     
    const playlistTracks = props.playlistTracks;
    const setPlaylistTracks = props.setPlaylistTracks;
    const setSearchInput = props.setSearchInput;
    const searchInput = props.searchInput

    //adds song to playlist Tracks. and adds a space to the search input to update the playlist div
    const addSong = (track) => {
      let tempPlaylist = playlistTracks
      if(tempPlaylist.map(song=>song.name).indexOf(track.name)<0){
        tempPlaylist.push(track)
        setPlaylistTracks(tempPlaylist)
      }
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