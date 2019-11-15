import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Slideshow from '../../composition/Slideshow/Slideshow'

export default class WelcomeMessage extends Component {
    render() {
        return (
           <section id="welcomeIntro">
               <Slideshow />
                <p className="fancy welcome">You might have already noticed it... </p> 
              <p>parmesan cheese is pretty expensive at the market - and is not even called parmesan, but parmigiano. <br />
              Same goes with chocolate, jeans, shoes... everything that is imported. <br /> 
              Sure this is due to custom duties and transportation, but a good chunk of the price goes to profits for importing companies... resulting in some products being paid up to six times their fair price (if not even more...). <br />
              Imagine you have a friend who is traveling to Italy. Would you ask him "oh, could you bring me back this, please?"</p>
              <p className="fancy welcome">That is where this App comes into plays. </p>
              <p>Connecting people who are planning to travel to a Country with other people interested in a specific little item. <br /> 
              For a little surcharge over the regular price, or a small flat amount (your friend should be rewarded for his courtesy, after all!) you could have that item you wished for, straight from the Country of origin!</p>
              <p className="fancy welcome">This is Bring It (Please).</p>
              <Link to='/register'><p  className="butCan" type="cancel">Join our community!</p></Link> 
           </section>
        )
    }

}