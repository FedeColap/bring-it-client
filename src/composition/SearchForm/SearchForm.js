import React, { Component } from 'react'

export default class LoginForm extends Component {

  state = { error: null }

    performResearch = e => {
        e.preventDefault()
        this.setState({ error: null })
        console.log('searching for results')
    }

  render() {
    const { error } = this.state
    return (
      <form
        className='SearchForm'
        onSubmit={this.performResearch}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='user_name'>
          <label htmlFor='SearchForm__country'>
            Which Country would you like some goods from?
          </label>
          <input
            required
            name='country'
            id='SearchForm__country'>
          </input>
        </div>
        <div className='months'>
          <label htmlFor='SearchForm__months'>
            Which month would you like to receive the goods?
          </label>
          <select name="months" id="SearchForm__months" required>
                    <option value ="gen">January</option>
                    <option value ="feb">February</option>
                    <option value ="mar">March</option>
                    <option value ="apr">April</option>
                    <option value ="may">May</option>
                    <option value ="jun">June</option>
                    <option value ="jul">July</option>
                    <option value ="aug">August</option>
                    <option value ="sep">September</option>
                    <option value ="oct">October</option>
                    <option value ="nov">November</option>
                    <option value ="dec">December</option>
                    <option value ="next">Next Year</option>    
         </select>
        </div>
        <button type='submit'>Search for users</button>
      </form>
    )
  }
}
