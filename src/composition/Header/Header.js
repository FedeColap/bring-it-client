import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ApiContext from '../../ApiContext';
import TokenService from '../../services/token-service'


export default class Header extends Component {
    static contextType = ApiContext;

    handleLogoutClick = e => {
        // e.preventDefault() DO NOT PUT IT, AS IT STOPS THE <LINK> ROUTE
        console.log('performing logging out')
        this.context.logginOut()
        TokenService.clearAuthToken()
    }
    renderLogoutLink() {
        return (
          <div className='Header__logged-in'>
            <Link to='/newtrip'><button>New Trip</button></Link>
            <Link to='/' onClick={this.handleLogoutClick}><button>Logout</button></Link>
          </div>
        )  
      }
    
      renderLoginLink() {
        return (
          <div className='Header__not-logged-in'>
            <Link to='/register'><button>Register</button></Link>
            <Link to='/login'><button>Log in</button></Link>
          </div>
        )
      }
    render() {
        return (
            <nav>
                <header>Bring It (Please)</header>
                <div className="navInteraction">
                    <Link to='/info' className="headerInfo">More Info</Link>
                    {TokenService.hasAuthToken() 
                      ? this.renderLogoutLink()
                      : this.renderLoginLink()}
                </div> 
            </nav>
            
        )
    }
}