import React, { Component } from 'react'
import AuthApiService from '../../services/auth-api-service'

export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }

  state = { error: null }

  handleSubmit = e => {
    e.preventDefault()
    
    const { first_name, last_name, user_name, email, password, repeat_password } = e.target

    this.setState({ error: null })

    AuthApiService.postUser({
      first_name: first_name.value,
      last_name: last_name.value,
      user_name: user_name.value,
      email: email.value,
      password: password.value,
      repeat_password: repeat_password.value,
    })
    .then(user => {
      first_name.value = ''
      last_name.value = ''
      user_name.value = ''
      email.value = ''
      password.value = ''
      repeat_password.value = ''
      this.props.onRegistrationSuccess()
  })

  .catch(res => {
      this.setState({ error: res.error })
  })

    // this.props.onRegistrationSuccess()
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
        <fieldset>
        <div className="registration__hint">* required field</div>
        <div className='first_name'>
          <label htmlFor='RegistrationForm__first_name'>First name * </label>
          <input
            name='first_name'
            type='text'
            required
            id='RegistrationForm__first_name' />

        </div>
        <div className='last_name'>
          <label htmlFor='RegistrationForm__last_name'>Last name *</label>
          <input
            name='last_name'
            type='text'
            required
            id='RegistrationForm__last_name' />
        </div>
        <div className='user_name'>
          <label htmlFor='RegistrationForm__user_name'>Nickname *</label>
          <input
            name='user_name'
            type='text'
            required
            id='RegistrationForm__user_name'/>
        </div>
        <div className='email'>
          <label htmlFor='RegistrationForm__email'>Email *</label>
          <input
            name='email'
            type='email'
            required
            id='RegistrationForm__email'/>
        </div>
        <div className='password'>
          <label htmlFor='RegistrationForm__password'>Password *</label>
          <input
            name='password'
            type='password'
            required
            id='RegistrationForm__password'/>
        </div>
        <div className='repeat-password'>
         <label htmlFor="RegistrationForm__repeat_password">Repeat Password *</label>
         <input 
            type="password"
            name="repeat_password" 
            required
            id="repeat_password"/>
       </div>
       </fieldset>  
        <button  className="butSub" type='submit'>
          Register
        </button>
      </form>
    )
  }
}
