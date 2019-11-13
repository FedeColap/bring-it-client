import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ApiContext from '../../ApiContext';


export default class Header extends Component {
    static contextType = ApiContext;

    static defaultProps = {
        // location: {},
        history: {
          push: () => {},
        },
    }
    handleLogoutClick = e => {
        e.preventDefault()
        console.log('performing logging out')
        this.context.logginOut()
        // const { history } = this.props
        // console.log(history)
        // history.push('/')
        this.props.history.push('/')
    }
    renderLogoutLink() {
        return (
          <div className='Header__logged-in'>
            <Link 
                to='/'
                onClick={this.handleLogoutClick}
            ><button onClick={this.handleLogoutClick}>Logout</button></Link>
            {/* <button onClick={this.handleLogoutClick}>Logout</button> */}
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
                    {this.context.isLogged
                    ? this.renderLogoutLink()
                    : this.renderLoginLink()}

                    {/* <Link to='/register'><button>Register</button></Link>
                    <Link to='/login'><button>Log in</button></Link> */}
                </div> 
            </nav>
            
        )
    }
}