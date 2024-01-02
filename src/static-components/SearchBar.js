function SearchBar(props) {
    const searchInput = props.searchInput
    const setSearchInput = props.setSearchInput
    const setSearchResults = props.setSearchResults
    const spotifyApi = props.spotifyApi
    
    //gets rid of the empty space at the end of the search input and searches using spotify api
    const search = () => {
      var tempSearchInput = searchInput;
      var lastChar = tempSearchInput.charAt(tempSearchInput.length-1);

      //gets rid of the empty space at the end of search input
      while(lastChar == ' '){
        tempSearchInput = tempSearchInput.substring(0, tempSearchInput.length-2);

        lastChar = tempSearchInput.charAt(tempSearchInput.length-1);
      }
      spotifyApi.searchTracks(tempSearchInput, {limit: 30})
      .then((data)=>{setSearchResults(data.body.tracks.items)})
    }
 
    return (
      <div className="SearchBar">
        <input
            id="search-input"
            className="text-input"
            placeholder='Search For Song'
            type='text'
            onChange={event => setSearchInput(event.target.value)}
            onKeyDown={event => {
              if(event.code == 'Enter'){
                search()
              }
            }}
        />
        <button className="medium-btn" onClick={search}>search</button>
      </div>
    );
  }
  
  export default SearchBar;