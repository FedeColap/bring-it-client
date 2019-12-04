import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'

export default class MoreInfo extends Component {

    //https://mathiasbynens.github.io/rel-noopener/

    renderNoTokenLink() {
        return (
          <div className='redirect_noToken'>
            <Link to='/'><p  className="butCan" type="cancel">Go to Welcome Page</p></Link> 
          </div>
        )  
    }

      renderYesTokenLink() {
        return (
          <div className='redirect_yesToken'>
            <Link to='/search'><p  className="butCan" type="cancel">Search for people traveling abroad</p></Link> 
          </div>
        )  
    }
    
    render() {
        return (
           <section>
                <h1 className="fancy hform">Our mission</h1>
        
                <p>Bring It (Please) is an App created in order to connect people who live in similar areas, so that when someone flies to a country, he can bring back small goodies to give to the person who contacted him. <br />
                    Our mission is to fight the unfair increase in costs of imported items, without incurring in anything illegal.</p>
                <p>Please read carefully our Code of conduct, as follows:</p>
                <ul>
                    <li>Each contact is allowed solely for the purpose of bringing / obtaining small goods; any other form of bother / harassment is strictly forbidden, and will cost the expulsion from the Platform.</li>
                    <li>Only goods that can legally enter in the United States can be the object of the transactions: items like meat, plants, animals, drugs, weapons (just to mention a few) are not allowed. For a complete list, please refer to this <a href="https://www.cbp.gov/travel/us-citizens/know-before-you-go/prohibited-and-restricted-items" target="_blank" rel="noopener noreferrer">U.S. Custom and Border Protection Page</a></li>
                    <li>Transactions are allowed only for small quantities of goods, which means, personal use. This App is not intended to bypass duties and other commercial obligations.</li>
                </ul> 
                {TokenService.hasAuthToken() 
                      ? this.renderYesTokenLink()
                      : this.renderNoTokenLink()}
                {/* <Link to='/'><p  className="butCan" type="cancel">Go to Welcome Page</p></Link>  */}
           </section>
        )
    }

}