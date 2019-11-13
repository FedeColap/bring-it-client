import React, { Component } from 'react';



class SearchBox extends Component {
  render() {
    return (
      <div className="SearchBox">
        <input 
            placeholder="Search term" 
            value={this.props.country}
            onChange={e => this.props.handleUpdate(e.target.value)}/>
      </div>   
    );
  }
}

export default SearchBox;