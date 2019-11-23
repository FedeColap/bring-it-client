import React, { Component } from 'react'
import ApiContext from '../../ApiContext';
import TokenService from '../../services/token-service'
// import AuthApiService from '../../services/auth-api-service'
// import { Button, Input } from '../Utils/Utils'

export default class LoginForm extends Component {
  static contextType = ApiContext;

  static defaultProps = {
    onLoginSuccess: () => {},
    loggingIn: () => {}
  }

  state = { 
    error: null
  }

    handleSubmitJwtAuth = e => {
        e.preventDefault()
        this.setState({ error: null })
        const { user_name, password } = e.target
        // const user_name = e.target.user_name.value;
        // const password = e.target.password.value;
        // console.log('login form submitted')
        // console.log({user_name, password});
        TokenService.saveAuthToken(
          TokenService.makeBasicAuthToken(user_name.value, password.value)
        )  
        this.props.onLoginSuccess()
        this.context.loggingIn()
    }

  render() {
    const { error } = this.state
    return (
      <form
        className='LoginForm'
        onSubmit={this.handleSubmitJwtAuth}
      >
       <fieldset>
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='user_name'>
          <label htmlFor='LoginForm__user_name'>
            Nickname
          </label>
          <input
            required
            name='user_name'
            id='LoginForm__user_name'>
          </input>
        </div>
        <div className='password'>
          <label htmlFor='LoginForm__password'>
            Password
          </label>
          <input
            required
            name='password'
            type='password'
            id='LoginForm__password'>
          </input>
        </div>
      </fieldset>  
        <button className="butSub" type='submit'>
          Login
        </button>
      </form>
    )
  }
}
