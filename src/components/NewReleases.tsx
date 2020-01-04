import React, { useState, useEffect } from 'react';
import Album from '../spotify/Album';
import axios from 'axios';
import SpotifyCredentials from '../spotify/SpotifyCredentials';

const NewReleases: React.FC = () => {
  let albums: Album[] = [];
  const [page, setPage] = useState(1);
  const [newReleases, setNewReleases] = useState(albums);
  const [isLoading, setIsLoading] = useState(true);

  let spotify: SpotifyCredentials = {
    clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
    clientSecret: process.env.REACT_APP_SPOTIFY_CLIENT_SECRET,
    isAuthenticated: false
  };

  useEffect(() => {

    axios
      .get('https://api.spotify.com/v1/browse/new-releases?country=SE')
      .then(response => console.log(response))
      .catch(error => console.log('dis error', error));
  });

  return (
    <div>
      {newReleases.map((nr: Album, index: number) => (
        <div key={index}>
          <img src={nr.images[1].url} />
          {nr.name}
        </div>
      ))}
    </div>
  );
};

export default NewReleases;
