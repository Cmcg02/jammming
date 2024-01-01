function SearchBar(props) {
    const searchInput = props.searchInput
    const setSearchInput = props.setSearchInput
    const setSearchResults = props.setSearchResults
    const spotifyApi = props.spotifyApi
    
    const search = () => {
        spotifyApi.searchTracks(searchInput)
        .then((data)=>{setSearchResults(data.body.tracks.items)})
    }

    return (
      <div className="SearchBar">
        <input
            className="text-input"
            placeholder='Search For Song'
            type='text'
            onChange={event => setSearchInput(event.target.value)}
        />
        <button className="medium-btn" onClick={search}>search</button>
      </div>
    );
  }
  
  export default SearchBar;