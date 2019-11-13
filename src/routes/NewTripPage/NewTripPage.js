import React, { Component } from 'react'
import NewTripForm from '../../composition/NewTripForm/NewTripForm'
import { Link } from 'react-router-dom'
import ApiContext from '../../ApiContext';


export default class NewTripPage extends Component {
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

    handleSubmitSuccess = () => {
        const { history } = this.props
        history.push('/search')
    }

  render() {
    return (
      <section className='LoginPage'>
        <h1 className="fancy">Enter a New Trip</h1>
        <h4>Are you planning to travel abroad soon? That is great news! Let other people know that you are available to bring back some goods by submitting this form.</h4>
        <NewTripForm
          onSubmitSuccess={this.handleSubmitSuccess}

        />
        <Link to='/search'><button  className="butCan" type="cancel">Cancel</button></Link>
      </section>
    )
  }
}