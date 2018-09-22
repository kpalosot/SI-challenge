import React from 'react';
import './RepoTable.css';
// import RepoRow from './RepoRow'

const RepoTable = (props) => {
  // const allRepositories = props.repositories.length > 0 ?
  //                         props.repositories.map((thisRepository) => {
  //                           return <RepoRow repository={thisRepository} />
  //                         }) : null;
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Language</th>
          <th>Latest tag</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.allRepositories}
      </tbody>
    </table>
  )
}

export default RepoTable;