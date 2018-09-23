import React from 'react';
import './FaveContainer.css'

import FaveRepoTable from '../repo_table/FaveRepoTable'

const FaveContainer = (props) => {
  return (
    <div className="fave-container">
      <FaveRepoTable favouriteRepositories={props.favouriteRepositories}
        removeFromFavourites={props.removeFromFavourites} />
    </div>
  )
}

export default FaveContainer;