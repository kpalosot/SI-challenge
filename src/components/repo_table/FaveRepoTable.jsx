import React from 'react';
import RepoTable from './RepoTable';
import RepoRow from './RepoRow';

const FaveRepoRow = (props) => {

  return (
    <RepoRow name={props.name}
      language={props.language}
      version={props.version}
      modifier={[<a href="/">, "Remove", </a>]} />
  )
}

const FaveRepoTable = (props) => {
  const thisRepositories = props.repositories.length > 0 ?
    props.repositories.map((thisRepository) => {
      return <FaveRepoRow repository={thisRepository} />
    }) : null;
  return (
    <RepoTable allRepositories={thisRepositories} />
  );
}

export default FaveRepoTable;