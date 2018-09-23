import React from 'react';
import './RepoContainer.css';
import SearchForm from '../search_form/SearchForm';
import AllRepoTable from '../repo_table/AllRepoTable';

// class RepoContainer extends Component {

//   render() {
//     return (
//       <div className="repo-container">
//         <SearchForm requestRepositories={this.props.requestRepositories}
//                     clearRepositories={this.props.clearRepositories} />
//         <AllRepoTable addToFavourites={this.props.addToFavourites}
//                       allRepositories={this.props.allRepositories}/>
//       </div>
//     )
//   }
// }

const RepoContainer = (props) => {
  return (
    <div className="repo-container">
      <SearchForm requestRepositories={props.requestRepositories}
        clearRepositories={props.clearRepositories} />
      <AllRepoTable addToFavourites={props.addToFavourites}
        allRepositories={props.allRepositories} />
    </div>
  )
}

export default RepoContainer;