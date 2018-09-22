import React, { Component } from 'react';
import './App.css';

import NavBar from './components/nav_bar/Navbar'
import RepoContainer from './components/repo_container/RepoContainer'
import FaveContainer from './components/fave_container/FaveContainer';

class App extends Component {

  constructor(){
    super();
    this.state = {
      favourites: [],
      allRepositories: []
    };
  }

    // TODO: also has to update the state of allRepositories
    // to exclude the favourited repository
  _addToFavourites = (newFavourite) => {
    const oldFavourites = this.state.favourites;
    this.setState({
      favourites: [...oldFavourites, newFavourite]
    });
  }

    // TODO: also has to update the state of favourites
    // to exclude the unfavourited repository
  _addToAllRepositories = (newRepository) => {
    const oldRepositories = this.state.allRepositories;
    this.setState({
      allRepositories: [...oldRepositories, newRepository]
    });
  }

  _clearRepositories = () => {
    this.setState({
      allRepositories: []
    });
  }

    // TODO: request repositories from Github
  _requestRepositories = () => {

  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="body-containers">
          <RepoContainer  clearRepositories={this._clearRepositories}
                          addtoFavourites={this._addToFavourites}
                          allRepositories={this.state.allRepositories}
                          requestRepositories={this._requestRepositories} />
          <FaveContainer  addtoAllRepositories={this._addToAllRepositories}
                          favouriteRepositories={this.state.favourites} />
        </div>
      </div>

    );
  }
}

export default App;

