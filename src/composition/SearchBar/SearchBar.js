import React, { Component } from 'react'
import SearchBox from '../SearchBox/SearchBox';
import FilterOptions from '../FilterOptions/FilterOptions';

export default class SearchBar extends Component {

  state = { error: null }

    render() {
        return (
          <div className="SearchBar">

            <div className="SearchBar__controls">
              <SearchBox
                country={ this.props.country }
                handleUpdate={this.props.handleUpdate}/>
              <FilterOptions 
                month={ this.props.month }
                handleFilterChange={ this.props.handleFilterChange }/>
            </div>
          </div>
        );
    }
}
