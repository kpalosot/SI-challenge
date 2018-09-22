import React from 'react';
import RepoTable from './RepoTable';
import RepoRow from './RepoRow';

const AllRepoRow = (props) => {

  return(
    <RepoRow  name={props.name}
              language={props.language}
              version={props.version}
              modifier={[<a href="/">, "Add", </a>]}/>
  )
}

const AllRepoTable = (props) => {
  const thisRepositories =  props.repositories.length > 0 ?
                            props.repositories.map((thisRepository) => {
                              return <AllRepoRow repository={thisRepository} />
                            }) : null;
  return (
    <RepoTable allRepositories={thisRepositories}/>
    );
}

export default AllRepoTable;