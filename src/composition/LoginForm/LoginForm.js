import React, { Component } from 'react'
import ApiContext from '../../ApiContext';
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'


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
    
    AuthApiService.postLogin({
        user_name: user_name.value,
        password: password.value,
    })
    .then(res => {
        // user_name.value = ''
        // password.value = ''
        TokenService.saveAuthToken(res.authToken)
        this.props.onLoginSuccess()
        this.context.loggingIn()
    })
    .catch(res => {
        this.setState({ error: res.error })
    })
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
