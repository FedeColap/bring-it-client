import React, { Component } from 'react'
import NewTripForm from '../../composition/NewTripForm/NewTripForm'
import { Link } from 'react-router-dom'
import ApiContext from '../../ApiContext';


export default class NewTripPage extends Component {
  static contextType = ApiContext;

    handleSubmitSuccess = () => {
        const { history } = this.props
        history.push('/search')
    }

  render() {
    return (
      <section className='LoginPage'>
        <h1 className="fancy hform">Enter a New Trip</h1>
        <h4>Are you planning to travel abroad soon? That is great news! Let other people know that you are available to bring back some goods.</h4>
        <NewTripForm
          onSubmitSuccess={this.handleSubmitSuccess}

        />
        <Link to='/search'><p  className="butCan" type="cancel">Cancel</p></Link>
      </section>
    )
  }
}