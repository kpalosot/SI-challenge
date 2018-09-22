import React, { Component } from 'react';
import './FaveContainer.css'

// import RepoTable from '../repo_table/RepoTable'
import FaveRepoTable from '../repo_table/RepoTable'

class FaveContainer extends Component {

  render(){
    return (
      <div className="fave-container">
        <FaveRepoTable repositories={this.props.favouriteRepositories}/>
      </div>
    )
  }
}

export default FaveContainer;