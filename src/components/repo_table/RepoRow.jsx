import React from 'react';

const RepoRow = (props) => {
  return (
    <tr>
      <td><a href="/">Shopify/Polaris</a></td>
      <td>Liquid</td>
      <td>v1.0.0</td>
      <td>{props.modifier.join()}</td>
    </tr>
  )
}

export default RepoRow;