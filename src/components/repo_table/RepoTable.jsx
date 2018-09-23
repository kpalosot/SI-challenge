import React from 'react';
import './RepoTable.css';

const RepoTable = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th className="col-40">Name</th>
          <th className="col-30">Language</th>
          <th className="col-20">Latest tag</th>
          <th className="col-10"></th>
        </tr>
      </thead>
      <tbody>
        {props.allRepositories}
      </tbody>
    </table>
  )
}

export default RepoTable;