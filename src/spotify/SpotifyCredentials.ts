interface SpotifyCredentials {
  clientId: string | undefined;
  clientSecret: string | undefined;
  isAuthenticated?: boolean;
}

export default SpotifyCredentials;
