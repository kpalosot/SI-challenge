import React, { Component } from 'react';
import './RepoContainer.css';
// import RepoTable from '../repo_table/RepoTable'
import SearchForm from '../search_form/SearchForm';
import AllRepoTable from '../repo_table/AllRepoTable';

class RepoContainer extends Component {

  render() {
    return (
      <div className="repo-container">
        <SearchForm requestRepositories={this.props.requestRepositories}
                    clearRepositories={this.props.clearRepositories}/>
        <AllRepoTable repositories={this.props.allRepositories}/>
      </div>
    )
  }
}

export default RepoContainer;