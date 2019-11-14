import React, { Component } from 'react'
import SearchBar from '../../composition/SearchBar/SearchBar'
import { Link } from 'react-router-dom'
import FilterableList from '../../composition/FilterableList/FilterableList'
import ApiContext from '../../ApiContext';

import '../../store.js'


export default class SearchPage extends Component {

  static contextType = ApiContext;

  static defaultProps = {
    // location: {},
    history: {
      push: () => {},
    },
  }

  

  constructor(props) {
    super(props);
    this.state = {
      isEmptyState: true,
      country: '',
      month: 'all'
    };
  }
    renderTheList = () => {
      console.log('hello!', this.state.country)
      console.log('hello!', this.state.month)
      this.setState({
        ...this.state,
        isEmptyState: false,
        showResults: true
      })
      
      return (
        <FilterableList
        country={this.state.country}
        month={this.state.month}/>
      )
    }
  

    updateSearchTerm(term) {
      this.setState({
        country: term,
        showResults: false
      })
      console.log(this.state.country)
    }
  
    updateFilterOption(option) {
      this.setState({
        month: option,
        showResults: false
      })
      console.log(this.state.month)
    }
  

  render() {


    return (
      <section className='SearchPage'>
        <h1 className="fancy hform">Seach for available users</h1>
        <h4>Please answer these question to find out if someone is traveling to a foreign Country and is available to bring you something back.</h4>
        <fieldset>
        <SearchBar
          // country={this.state.country}
          // month={this.state.month}
          handleUpdate={term=>this.updateSearchTerm(term)}
          handleFilterChange={option => this.updateFilterOption(option)}/>
          </fieldset>
        <button className="butSub" onClick={this.renderTheList}> Search</button>
        
        {this.state.showResults && <FilterableList country={this.state.country} month={this.state.month}/>}
        

        {/* <FilterableList
          country={this.state.country}
          month={this.state.month}/> */}
      </section>
    )
  }
}