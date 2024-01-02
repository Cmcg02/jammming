import { useEffect } from "react";
import './Authorize.css'

function Authorize(props) {
    const scopes = 'playlist-read-private playlist-read-collaborative playlist-modify-private playlist-modify-public'; 
    const clientId = 'c89f791751ca44daafbb3e62ea88bde3'
    const redirectURI = 'http://localhost:3000'
    const authorizeUri = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectURI}&response_type=token&scope=${scopes}&show_dialog=true`

    return (
      <p><a href={authorizeUri}><button>login</button></a></p>
    );
  }
  
  export default Authorize;