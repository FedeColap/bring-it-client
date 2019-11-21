import React, { Component } from 'react'
import SearchBar from '../../composition/SearchBar/SearchBar'
import { Link } from 'react-router-dom'
import FilterableList from '../../composition/FilterableList/FilterableList'
import ApiContext from '../../ApiContext';

import '../../store.js'
import { nextTick } from 'q';


export default class SearchPage extends Component {

  static contextType = ApiContext;

  constructor(props) {
    super(props);
    this.state = {
      isEmptyState: true,
      store: [],
      country: '',
      month: 'all'
    };
  }

  checkCountry = (e) => {
    e.preventDefault();
    const externalUrl = `https://restcountries.eu/rest/v2/name/${this.state.country}`;
      console.log(externalUrl);

      fetch(externalUrl)
        .then(response => {
          console.log(typeof(response))
          console.log(response.status)
          console.log(response)
          if (response.ok) {
            return response.json();
          } else {alert('Could not find the Country.. did you spell it correctly?') }
        })
        .then(responseJson => {
          this.setState({
            country: responseJson[0].name
          })
          console.log(this.state.country)
          this.renderTheList();
        })
        .catch(err => {
          console.log(`Something went wrong: ${err.message}`);
        });
  }

    renderTheList = () => {
      // e.preventDefault();
      console.log('hello!', this.state.country)
      console.log('hello!', this.state.month)
      
      //construct a URL with the query string
      const url = 'http://localhost:8000/api/trips';
      // const params = [];
      // if (this.state.country) {
      //   params.push(`${this.state.country}`);
      // }
    
      // const url = `${baseUrl}?${params}`;
      console.log(url)

      fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then(data => {
        console.log(data)
        const output = data.filter(dt => dt.month === this.state.month)
        console.log(output)
        this.setState({
          ...this.state,
          store : output,
          isEmptyState: false,
          showResults: true
        })
        console.log(this.state.store)
        
          return (
            <FilterableList
            store={this.state.store}
            country={this.state.country}
            month={this.state.month}/>
          )
          
      })
      
      .catch(err => {
        this.setState({
          error: 'Sorry, could not get travelers at this time.'
        });
      })
      
      
      return (
        <FilterableList
        people={this.state.people}
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
        <button className="butSub" onClick={this.checkCountry}> Search</button>
        
        {this.state.showResults && <FilterableList country={this.state.country} month={this.state.month}/>}
        

        {/* <FilterableList
          country={this.state.country}
          month={this.state.month}/> */}
      </section>
    )
  }
}