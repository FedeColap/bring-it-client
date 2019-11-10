import React, { Component } from 'react'
import SearchForm from '../../composition/SearchForm/SearchForm'
import { Link } from 'react-router-dom'


export default class SearchPage extends Component {
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
      <section className='SearchPage'>
        <h1>Seach for available users</h1>
        <h4>Please answer these question to find out if someone is traveling to a foreign Country and is available to bring you something back.</h4>
        <SearchForm
        //   onLoginSuccess={this.handleLoginSuccess}
        />
      </section>
    )
  }
}