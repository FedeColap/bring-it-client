import React, { Component } from 'react'

export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }

  state = { error: null }

  handleSubmit = e => {
    e.preventDefault()
    // const { first_name, last_name, user_name, email, password } = ev.target
    const first_name = e.target.first_name.value;
    const last_name = e.target.last_name.value;
    const user_name = e.target.user_name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log('registration form submitted')
    console.log({first_name, last_name, user_name, email, password});
    this.props.onRegistrationSuccess()
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
       </fieldset>  
        <button  className="butSub" type='submit'>
          Register
        </button>
      </form>
    )
  }
}
