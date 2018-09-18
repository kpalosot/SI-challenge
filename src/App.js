import React, { Component } from 'react';
import './App.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <span className="navbar-brand">My Github Favorites</span>
    </nav>)
}

const SearchContainer = () => {
  return ();
}

class App extends Component {
  render() {
    return (
      <NavBar />
    );
  }
}

export default App;
