import React, { Component } from 'react';
import RepoTable from './RepoTable';
import RepoRow from './RepoRow';

class AllRepoRow extends Component{
  _onClickHandler = (e) => {
    e.preventDefault();
    this.props.addToFavourites(e.target.id);
  }

  render(){
    const repository = this.props.repository;
    const thisModifier = repository.favourite ? null :
      (<a id={repository.id} className="modify-list" onClick={this._onClickHandler}>Add</a>);

    return (
      <RepoRow nameWithOwner={repository.nameWithOwner}
        language={repository.language}
        version={repository.version}
        url={repository.url}
        modifier={thisModifier} />
    )
  }
}

const AllRepoTable = (props) => {
  const thisRepositories =  props.allRepositories.length > 0 ?
                            props.allRepositories.map((thisRepository) => {
                              return <AllRepoRow  key={thisRepository.id}
                                                  repository={thisRepository}
                                                  addToFavourites={props.addToFavourites} />
                            }) : null;
  return (
    <RepoTable allRepositories={thisRepositories}/>
    );
}

export default AllRepoTable;