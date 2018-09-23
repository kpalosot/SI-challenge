import React from 'react';

const RepoRow = (props) => {
  return (
    <tr>
      <td className="col-40"><a className="repo-link" href={props.url}>{props.nameWithOwner}</a></td>
      <td className="col-30">{props.language}</td>
      <td className="col-20">{props.version}</td>
      <td className="col-10">{props.modifier}</td>
    </tr>
  )
}

export default RepoRow;