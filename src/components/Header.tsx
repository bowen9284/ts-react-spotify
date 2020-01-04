import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Drawer, Button } from '@material-ui/core';
import './../App.css';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AlbumIcon from '@material-ui/icons/Album';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import LoginIcon from '@material-ui/icons/VpnKey';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import logo from '../spotify/Spotify_Icon_RGB_Green.png';
import SpotifyAuth from '../spotify/SpotifyAuth';

const Header: React.FC = () => {
  const [state, setState] = React.useState({ left: false });
  const [authCode, setAuthCode] = React.useState('');

  const location = useLocation();

  useEffect(() => {
    const token = location.hash.substr(14, 165);
    setAuthCode(token);
  });

  const toggleDrawer = (open: boolean) => {
    setState({ left: open });
  };

  const login = () => {
    SpotifyAuth.authenticate();
  };

  const sideList = (side: string) => (
    <div
      className="List"
      role="presentation"
      onClick={() => toggleDrawer(true)}
    >
      <List>
        {['New Releases'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <AlbumIcon /> : <LibraryMusicIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem button key="Sign In" onClick={login}>
          <ListItemIcon>
            <LoginIcon />
          </ListItemIcon>
          <ListItemText primary="Sign In" />
        </ListItem>
        <ListItem button key="Sign Out">
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Sign Out" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <header className="App-header">
      {authCode}
      <Button onClick={() => toggleDrawer(true)}>
        <img src={logo} className="App-logo" alt="logo" />
      </Button>
      <Drawer open={state.left} onClose={() => toggleDrawer(false)}>
        {sideList('left')}
      </Drawer>
    </header>
  );
};

export default Header;
