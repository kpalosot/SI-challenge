import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {

  constructor(props){
    super(props)
    this.state = {
      searchKeyWord: ""
    }
  }

  _handleKeyEvent = (e) => {
    if (e.key === 'Enter'){
      let finalSearchKeyWord = this.state.searchKeyWord;
      this.props.requestRepositories(finalSearchKeyWord);
    }
  }

  _onTextChange = (e) => {
    if(this.state.searchKeyWord.length <= 0){
      this.props.clearRepositories();
    } else {
      this.setState({
        searchKeyWord: e.target.value
      })
    }
  }

  render(){
    return (
      <form className="search-form">
        <input className="search-input" />
        <button type="submit" className="search-button">Search</button>
      </form>
    )
  }
}

export default SearchForm;