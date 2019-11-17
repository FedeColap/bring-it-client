import React, { Component } from 'react'
import ApiContext from '../../ApiContext';
// import TokenService from '../../services/token-service'
// import AuthApiService from '../../services/auth-api-service'
// import { Button, Input } from '../Utils/Utils'

export default class NewTripForm extends Component {
  static contextType = ApiContext;

  static defaultProps = {
    onLoginSuccess: () => {},
    loggingIn: () => {}
  }

  state = { 
    error: null, 
    user_name: '',
    country: '',
    month: ''
  }

  handleNewName = (e) => {
    this.setState({
        user_name: e.target.value,
      })
    console.log(this.state.user_name)
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

    verifyUser = (e) => {
        const username = this.state.user_name;
        console.log('Displaying User: ', username);
        const store = this.context.store
        console.log(store)
        const verify =  store.filter(file => 
        (file.user_name === username) 
        )
        if(verify.length === 0) {
            alert ("the nickname entered is incorrect")    
        // } else {this.passTheInfos(e)}
      } else {this.checkCountry(e)}
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
            } else {alert('Could not find the Counrty.. did you spell it correctly?') }
          })
          .then(responseJson => {
            this.setState({
              country: responseJson[0].name
            })
            console.log(this.state.country)
            this.passTheInfos(e);
          })
          // .then(responseJson => {
          //   if(responseJson[0].name) {
          //     this.passTheInfos(e);
          //   } 
          // })
          .catch(err => {
            console.log(`Something went wrong: ${err.message}`);
          });

          

    }

    passTheInfos = (e) => {
        e.preventDefault()
        this.setState({ error: null })
        const username = this.state.user_name;
        const newCountry = this.state.country;
        const newMonth = this.state.month;
        const store = this.context.store
        // console.log(username)
        console.log(store)
        const user =  store.filter(file => 
        (file.user_name === username) 
        )
        console.log(user)
        const newEmail = user[0].email
        // const newId = user[0].id   IN QUESTO CASO NON MI SERVE PERCHE L'ID SI RIFERISCE AL DB TOTALE, NON AL SOLO USER ID
        console.log(user[0].email)
        console.log(newEmail)
        this.context.updateStore(username, newEmail, newCountry,newMonth )
        this.props.onSubmitSuccess()
    }

  render() {
    const { error } = this.state
    return (
      
      <form
        className='NewTripForm'
        onSubmit={this.verifyUser}
      >
       
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <fieldset>
        <div className='name'>
          <label htmlFor='NewTripForm__user_name'>
            Please confirm your Nickname
          </label>
          <input
            type="text"
            required
            id='NewTripForm__user_name'
            onChange={this.handleNewName}>
          </input>
        </div>
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
            Which month would you like to receive the goods?
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
