import React, { Component } from 'react'
import RegistrationForm from '../../composition/RegistrationForm/RegistrationForm'
import { Link } from 'react-router-dom'

export default class RegistrationPage extends Component {

  handleRegistrationSuccess = () => {
    const { history } = this.props
    history.push('/login')
  }

  render() {
    return (
      <section className='RegistrationPage'>
          <h1 className="fancy hform">Welcome! Please sign up.</h1>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
        <Link to='/'><p  className="butCan" type="cancel">Cancel</p></Link>
      </section>
    )
  }
}