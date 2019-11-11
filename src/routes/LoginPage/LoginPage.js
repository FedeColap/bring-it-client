import React, { Component } from 'react'
import LoginForm from '../../composition/LoginForm/LoginForm'
import { Link } from 'react-router-dom'


export default class LoginPage extends Component {
  static defaultProps = {
    // location: {},
    history: {
      push: () => {},
    },
  }

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
        />
        <Link to='/'><button  className="butCan" type="cancel">Cancel</button></Link>
      </section>
    )
  }
}