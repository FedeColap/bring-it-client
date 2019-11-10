import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class WelcomeMessage extends Component {
    render() {
        return (
           <section>
                <h1>OUR MISSION</h1>
        
                <p>Bring It (Please) is an App created in order to connect people who live in similar areas, so that when someone flies to a Country, he can bring back small goodies to give to the person who contacted him. <br />
                    Our mission is to fight the unfair increase of cost of imported items, without incurring in anything illegal.</p>
                <p>Please read carefully our Code of conduct, as follows:</p>
                <ul>
                    <li>Each contact is allowed solely for the purpose of bringing / obtaining small goods; any other form of bother / harassment is strictly forbidden, and will cost the expulsion from the Platform.</li>
                    <li>Only legal goods can be the object of the transactions: this means that, for example, meat, plants, animals, drugs, arms are not allowed. For a complete list of the forbidden items, please refer to this <a href="https://www.cbp.gov/travel/us-citizens/know-before-you-go/prohibited-and-restricted-items" target="_blank">U.S. Custom and Border Protection Page</a></li>
                    <li>Transactions are allowed only for small quantities of goods, which means, personal use. This App is not a way to bypass duties and other commercial obligations.</li>
                </ul> 
                <Link to='/'><button  classNme="butCan" type="cancel">Go to Welcome Page</button></Link> 
           </section>
        )
    }

}