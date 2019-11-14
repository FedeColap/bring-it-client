import React, { Component } from 'react'
import LoginForm from '../../composition/LoginForm/LoginForm'
import { Link } from 'react-router-dom'
import ApiContext from '../../ApiContext';


export default class LoginPage extends Component {
  static contextType = ApiContext;

  // state = {
  //   isLogged: false
  // }

//   handleLoginSuccess = () => {
//     const { location, history } = this.props
//     const destination = (location.state || {}).from || '/'
//     history.push(destination)
//   }

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
      </section>
    )
  }
}