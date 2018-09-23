import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {

  constructor(props){
    super(props)
    this.state = {
      searchKeyWord: ""
    }
  }

  _createRequest = () => {
    let finalSearchKeyWord = this.state.searchKeyWord;
    this.props.requestRepositories(finalSearchKeyWord);
  }

  _onClick = (e) => {
    e.preventDefault();
    this._createRequest();

  }

  _handleKeyEvent = (e) => {
    if (e.key === 'Enter'){
      this._createRequest();
    }
  }

  _onKeyDown = (e) => {
    if(e.keyCode === 8 && this.state.searchKeyWord.length === 1){
      this.props.clearRepositories();
    }
  }

  _onTextChange = (e) => {
    this.setState({
      searchKeyWord: e.target.value
    });
  }

  render(){
    return (
      <div className="search-form">
        <input onChange={this._onTextChange} onKeyDown={this._onKeyDown} onKeyPress={this._handleKeyEvent} name="searchKeyWord" className="search-input" />
        <button onClick={this._onClick} className="search-button">Search</button>
      </div>
    )
  }
}

export default SearchForm;