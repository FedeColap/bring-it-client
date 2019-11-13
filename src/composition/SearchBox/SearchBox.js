import React, { Component } from 'react';



class SearchBox extends Component {
  render() {
    return (
      <div className="SearchBox">
        <label htmlFor='SearchBox__country'>Which Country would you like some goods from?</label>
        <input 
            id='SearchBox__country'
            placeholder="Search term" 
            value={this.props.country}
            required
            onChange={e => this.props.handleUpdate(e.target.value)}/>
      </div>   
    );
  }
}

export default SearchBox;