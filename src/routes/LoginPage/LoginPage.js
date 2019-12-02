import React, { Component } from 'react'
import LoginForm from '../../composition/LoginForm/LoginForm'
import { Link } from 'react-router-dom'
import ApiContext from '../../ApiContext';


export default class LoginPage extends Component {
  static contextType = ApiContext;

    handleLoginSuccess = () => {
        const { history } = this.props
        console.log(history)
        history.push('/search')
    }

  render() {
    return (
      <section className='LoginPage'>
        <h1 className="fancy hform">Welcome back! Please log in.</h1>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
          loggingIn = {this.props.loggingIn}
        />
        <Link to='/'><p  className="butCan" type="cancel">Cancel</p></Link>
        <p className="fakedata">Just wanna poke around? Use these credentials. <br /> 
        Username: <strong>Eric</strong> - Password: <strong>G0d0dpassw0rd24!</strong></p>
      </section>
    )
  }
}