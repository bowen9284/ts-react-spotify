import SpotifyCredentials from './SpotifyCredentials';

const SpotifyAuth = {
  authenticate() {
    let spotify: SpotifyCredentials = {
      clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
      clientSecret: process.env.REACT_APP_SPOTIFY_CLIENT_SECRET,
      isAuthenticated: false
    };

    window.location.replace(
      `https://accounts.spotify.com/authorize?client_id=${spotify.clientId}&response_type=token&redirect_uri=http://localhost:3000/`
    );
  }
};

export default SpotifyAuth;
