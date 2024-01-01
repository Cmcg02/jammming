import './App.css';
import Playlist from './static-components/Playlist';
import SearchResults from './static-components/SearchResults';
import SearchBar from './static-components/SearchBar';

function App() {
  return (
    <div className="App">
      <div className='Search'>
        <SearchBar/>
        <SearchResults/>
      </div>
      <div className='Edit'>
        <Playlist/>
      </div>
    </div>
  );
}

export default App;
