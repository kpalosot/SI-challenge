import React, { Component } from 'react';
import RepoTable from './RepoTable';
import RepoRow from './RepoRow';

class FaveRepoRow extends Component {
  _onClickHandler = (e) => {
    e.preventDefault();
    this.props.removeFromFavourites(e.target.id);
  }

  render(){
    const repository = this.props.repository;
    const thisModifier = (<a id={repository.id} className="modify-list" onClick={this._onClickHandler}>Remove</a>);
    return (
      <RepoRow nameWithOwner={repository.nameWithOwner}
        language={repository.language}
        version={repository.version}
        url={repository.url}
        modifier={thisModifier} />
    )
  }
}

const FaveRepoTable = (props) => {
  // console.log("Creating Repo table");
  // console.log("props.favouriteRepositories.length:", props.favouriteRepositories.length)
  const thisRepositories = (props.favouriteRepositories && props.favouriteRepositories.length) > 0 ?
    props.favouriteRepositories.map((thisRepository) => {
      // console.log("mapping favourite repos to FaveRepoRow")
      return <FaveRepoRow key={thisRepository.id}
                          repository={thisRepository}
                          removeFromFavourites={props.removeFromFavourites}/>
    }) : null;
  return (
    <RepoTable allRepositories={thisRepositories} />
  );
}

export default FaveRepoTable;