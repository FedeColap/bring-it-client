import React, { Component } from 'react'
// import { Button, Input, Required } from '../Utils/Utils'
// import AuthApiService from '../../services/auth-api-service'

export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }

  state = { error: null }

  handleSubmit = e => {
    e.preventDefault()
    // const { full_name, nick_name, user_name, password } = ev.target
    this.props.onRegistrationSuccess()
    const nickname = e.target.nick_name.value;
    const password = e.target.password.value;
    console.log('Name: ', nickname);
    console.log('Password: ', password);

    // this.setState({ error: null })
    // AuthApiService.postUser({
    //   user_name: user_name.value,
    //   password: password.value,
    //   full_name: full_name.value,
    //   nickname: nick_name.value,
    // })
    // .then(user => {
    //     full_name.value = ''
    //     nick_name.value = ''
    //     user_name.value = ''
    //     password.value = ''
    //     this.props.onRegistrationSuccess()
    // })
    // .catch(res => {
    //     this.setState({ error: res.error })
    // })
  }

  render() {
    const { error } = this.state
    return (
      <form
        className='RegistrationForm'
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className="registration__hint">* required field</div>
        <div className='first_name'>
          <label htmlFor='RegistrationForm__first_name'>First name * {/* <Required /> */}</label>
          <input
            name='first_name'
            type='text'
            required
            id='RegistrationForm__first_name' />

        </div>
        <div className='last_name'>
          <label htmlFor='RegistrationForm__last_name'>Last name *{/* <Required /> */}</label>
          <input
            name='last_name'
            type='text'
            required
            id='RegistrationForm__last_name' />
        </div>
        <div className='nick_name'>
          <label htmlFor='RegistrationForm__nick_name'>Nickname *</label>
          <input
            name='nick_name'
            type='text'
            required
            id='RegistrationForm__nick_name'/>
        </div>
        <div className='password'>
          <label htmlFor='RegistrationForm__password'>Password *{/* <Required /> */}</label>
          <input
            name='password'
            type='password'
            required
            id='RegistrationForm__password'/>
        </div>
        <div className='repeat-password'>
         <label htmlFor="RegistrationForm__repeatPassword">Repeat Password *</label>
         <input 
            type="password"
            name="repeatPassword" 
            required
            id="repeatPassword"/>
       </div>
        
        <button type='submit'>
          Register
        </button>
      </form>
    )
  }
}
