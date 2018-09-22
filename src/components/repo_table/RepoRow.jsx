import React from 'react';

const RepoRow = (props) => {
  return (
    <tr>
      <td><a href={props.url}>{props.nameWithOwner}</a></td>
      <td>{props.language}</td>
      <td>{props.version}</td>
      <td>{props.modifier}</td>
    </tr>
  )
}

export default RepoRow;