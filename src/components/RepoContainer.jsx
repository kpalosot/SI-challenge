import React, { Component } from 'react'
import './RepoContainer.css'

const SearchForm = () => {
  return (
    <form>
      <input className="search-input"/>
      <button type="submit" className="search-button">Search</button>
    </form>
  )
}

class RepoContainer extends Component {
  render() {
    return (
      <div className="repo-container">
        <SearchForm />
      </div>
    )
  }
}

export default RepoContainer;