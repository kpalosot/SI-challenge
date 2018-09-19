import React, { Component } from 'react';
import './App.css';

import NavBar from './components/Navbar'
import RepoContainer from './components/RepoContainer'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <RepoContainer />
      </div>

    );
  }
}

export default App;

