import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <nav>
                <header>Bring It (Please)</header>
                <div className="navInteraction">
                    <Link to='/info' className="headerInfo">More Info</Link>
                    <Link to='/register'><button>Register</button></Link>
                    <Link to='/login'><button>Log in</button></Link>
                </div> 
            </nav>
            
        )
    }
}