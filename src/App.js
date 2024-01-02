import { useState, useEffect } from 'react';
import './App.css';
import Playlist from './static-components/Playlist';
import SearchResults from './static-components/SearchResults';
import SearchBar from './static-components/SearchBar';
import Authorize from './static-components/Authorize';

function App() { 
  var SpotifyWebApi = require('spotify-web-api-node');
  var spotifyApi = new SpotifyWebApi({
    clientId: 'c8aba8cf28d2422e888a7708d8794976',
    clientSecret: 'bca728e7ebd14eb28303147a04e92c0d',
    redirectUri: 'http://localhost:3000'
  })
  const [loggedIn, setLoggedIn] = useState(false);
  const [searchInput, setSearchInput] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [playlistTracks, setPlaylistTracks] = useState([])
  const [PlaylistName, setPlaylistName] = useState('')
  const [playlistDescription, setPlaylistDescription] = useState('')
  const [playlistID, setPlaylistID] = useState('')
  const [accessToken, setAccessToken] = useState('')
  
  //extracts the accessToken from the url
  useEffect(()=>{
    var docURL = document.URL;
    if(docURL.includes('access_token')){
      setAccessToken(docURL.split('#')[1].split('&')[0].split('=')[1]);
      setLoggedIn(true)
    }
  }, [])
  spotifyApi.setAccessToken(accessToken)

  const save = () => {
    console.log(PlaylistName)
    console.log(playlistDescription)
    console.log(playlistTracks)
  }

  return (
    <div className="App">
      {loggedIn?(<>

        <div className='Search'>
          <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} setSearchResults={setSearchResults} spotifyApi={spotifyApi}/>
          <SearchResults searchResults={searchResults} setPlaylistTracks={setPlaylistTracks} playlistTracks={playlistTracks} setSearchInput={setSearchInput} searchInput={searchInput}/>
        </div>

        <div className='Edit'>
          <Playlist playlistTracks={playlistTracks} setPlaylistTracks={setPlaylistTracks}  spotifyApi={spotifyApi} setPlaylistDescription={setPlaylistDescription} setPlaylistName={setPlaylistName} setSearchInput={setSearchInput} searchInput={searchInput}/>
          <button onClick={save}>Save</button>
        </div>

      </>):(<>
        <Authorize spotifyApi={spotifyApi}/>
      </>)}
      
    </div>
  );
}

export default App;
