import React from 'react';
import RepoTable from './RepoTable';
import RepoRow from './RepoRow';

const AllRepoRow = ({ repository }) => {

  return(
    <RepoRow  nameWithOwner={repository.nameWithOwner}
              language={repository.language}
              version={repository.version}
              url={repository.url}
              modifier={<a href="/">Add</a>}/>
  )
}

const AllRepoTable = (props) => {
  const thisRepositories =  props.repositories.length > 0 ?
                            props.repositories.map((thisRepository) => {
                              return <AllRepoRow key={thisRepository.id} repository={thisRepository} />
                            }) : null;
  return (
    <RepoTable allRepositories={thisRepositories}/>
    );
}

export default AllRepoTable;