// importing frameworks, modules
import React, { Component } from 'react';
import {  createRequest,
          extractRepoInfo,
          setFaveFlagByFaveRepositoryList,
          setFaveFlagByRepoID,
          getFavourite,
          removeUnfaveRepo  } from './helpers';

// importing CSS
import './App.css';

// importing components
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


  _addToFavourites = (newFavouriteID) => {
    const oldFavouriteRepos = this.state.favourites;
    const newFavouriteRepo = getFavourite(this.state.allRepositories, newFavouriteID);
    const allRepositories = setFaveFlagByRepoID(newFavouriteID, true, this.state.allRepositories);
    this.setState({
      favourites: [...oldFavouriteRepos, newFavouriteRepo],
      allRepositories
    });

  }


  _removeFromFavourites = (repositoryID) => {
    const newFaveRepos = removeUnfaveRepo(this.state.favourites, repositoryID);
    const allRepositories = setFaveFlagByRepoID(repositoryID, false, this.state.allRepositories);
    this.setState({
      favourites: newFaveRepos,
      allRepositories
    });
  }

  _clearRepositories = () => {
    this.setState({
      allRepositories: []
    });
  }

  _requestRepositories = (finalSearchKeyWord) => {
    createRequest(finalSearchKeyWord)
          .catch(error => console.error(error))
          .then(data => {
            let allRepoInfo = extractRepoInfo(data);
            allRepoInfo = setFaveFlagByFaveRepositoryList(this.state.favourites, allRepoInfo);
            this.setState({
              allRepositories: allRepoInfo
            })
          });
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="body-containers">
          <RepoContainer  clearRepositories={this._clearRepositories}
                          addToFavourites={this._addToFavourites}
                          allRepositories={this.state.allRepositories}
                          requestRepositories={this._requestRepositories} />
          <FaveContainer  removeFromFavourites={this._removeFromFavourites}
                          favouriteRepositories={this.state.favourites} />
        </div>
      </div>

    );
  }
}

export default App;

