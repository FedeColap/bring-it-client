import React, { Component } from 'react'
import ApiContext from '../../ApiContext';
import TripsApiService from '../../services/users-api-service.js'
import TokenService from '../../services/token-service'
// import AuthApiService from '../../services/auth-api-service'
// import { Button, Input } from '../Utils/Utils'

export default class NewTripForm extends Component {
  static contextType = ApiContext;

  // static defaultProps = {
  //   onLoginSuccess: () => {},
  //   loggingIn: () => {}
  // }

  state = { 
    error: null, 
    country: '',
    month: ''
  }

  handleNewCountry = (e) => {
    this.setState({
        country: e.target.value,
      })
    console.log(this.state.country)
  }
  handleNewMonth = (e) => {
    this.setState({
        month: e.target.value,
      })
    console.log(this.state.month)
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
            this.passTheInfos(e);
          })
          .catch(err => {
            console.log(`Something went wrong: ${err.message}`);
          });
    }

    passTheInfos = (e) => {
        e.preventDefault()
        this.setState({ error: null })
        // const user_id = this.state.user_id;
        const newCountry = this.state.country;
        const newMonth = this.state.month;
        TripsApiService.postNewTrip(newCountry, newMonth)
        .then(this.context.addTrip)
        .then(() => {
          this.props.onSubmitSuccess()
        })
        .catch(this.context.setError)

        // this.context.updateStore(newCountry, newMonth )
        // this.props.onSubmitSuccess()
    }

  render() {
    const { error } = this.state
    return (
      
      <form
        className='NewTripForm'
        onSubmit={this.checkCountry}
      >
       
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <fieldset>
          <div className='country'>
            <label htmlFor='NewTripForm__country'>
              Which Country are you traveling to? 
            </label>
            <input
              type="text"
              required
              id='NewTripForm__country'
              placeholder='Italy'
              onChange={this.handleNewCountry}>
            </input>
          </div>
          <div className='months'>
          <label htmlFor='SearchForm__months'>
              In which month are you taking your trip?
            </label>
            <select name="months" id="SearchForm__months" required onChange={this.handleNewMonth}>
                      <option value ="all">Select</option>
                      <option value ="jan">January</option>
                      <option value ="feb">February</option>
                      <option value ="mar">March</option>
                      <option value ="apr">April</option>
                      <option value ="may">May</option>
                      <option value ="jun">June</option>
                      <option value ="jul">July</option>
                      <option value ="aug">August</option>
                      <option value ="sep">September</option>
                      <option value ="oct">October</option>
                      <option value ="nov">November</option>
                      <option value ="dec">December</option>
                      
          </select>
          </div>
        </fieldset>
        <button className="butSub" type='submit'>
          Send
        </button>
      </form>
      
      
    )
  }
}
