import React, { Component } from 'react'
import LoginForm from '../../composition/LoginForm/LoginForm'
import { Link } from 'react-router-dom'
import ApiContext from '../../ApiContext';


export default class LoginPage extends Component {
  static contextType = ApiContext;

  static defaultProps = {
    // location: {},
    history: {
      push: () => {},
    },
  }

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
        history.push('/search')
    }

  render() {
    return (
      <section className='LoginPage'>
        <h1 className="fancy">Welcome back! Please log in.</h1>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
          loggingIn = {this.props.loggingIn}
        />
        <Link to='/'><button  className="butCan" type="cancel">Cancel</button></Link>
      </section>
    )
  }
}