import React from 'react';
import './App.css';
import NewReleases from './components/NewReleases';
import Header from './components/Header';
import { BrowserRouter as Router } from 'react-router-dom';

const App: React.FC = () => {
  
  return (
    <Router>
      <div className="App">
        <Header />
        <div>
          <NewReleases />
        </div>
      </div>
    </Router>
  );
};

export default App;
