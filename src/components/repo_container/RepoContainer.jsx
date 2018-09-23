import React from 'react';
import './RepoContainer.css';
import SearchForm from '../search_form/SearchForm';
import AllRepoTable from '../repo_table/AllRepoTable';

const RepoContainer = (props) => {
  return (
    <div className="repo-container">
      <SearchForm requestRepositories={props.requestRepositories}
        clearRepositories={props.clearRepositories} />
      <AllRepoTable addToFavourites={props.addToFavourites}
        allRepositories={props.allRepositories} />
    </div>
  )
}

export default RepoContainer;