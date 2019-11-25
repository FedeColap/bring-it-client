import React, { Component } from 'react'


export default class NotFoundPage extends Component {
  render() {
    return (
      <section className='NotFoundPage'>
        <img className ="boh" src={require("./ransie4.jpg")} alt="perplexed picture" />
        <h2>Sorry, this is a dead end!</h2>
        <p>Try going back to another page.</p>
      </section>
    )
  }
}