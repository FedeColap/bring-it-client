import React, { Component } from 'react'
import SearchBar from '../../composition/SearchBar/SearchBar'
import FilterableList from '../../composition/FilterableList/FilterableList'
import ApiContext from '../../ApiContext';
import TripsApiService from '../../services/users-api-service'




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

      TripsApiService.getTrips()
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
        store={this.state.store}
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
        <h1 className="fancy hform">Search for available users</h1>
        <h4>Please answer these question to find out if someone is traveling to a foreign country and is available to bring you something back.</h4>
        <fieldset>
        <SearchBar
          handleUpdate={term=>this.updateSearchTerm(term)}
          handleFilterChange={option => this.updateFilterOption(option)}/>
          </fieldset>
        <button className="butSub" onClick={this.checkCountry}> Search</button>
        
        {this.state.showResults && <FilterableList store={this.state.store} country={this.state.country} month={this.state.month}/>}
        
      </section>
    )
  }
}