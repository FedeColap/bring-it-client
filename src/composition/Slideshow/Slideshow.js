import React, { Component } from 'react'

export default class Slideshow extends Component {
    render() { 
        return (

            <div class="wrapper">
                <div class="slider">
                    <div class="slide">
                        <img src={require("./img1.jpg")}  />
                        <img src={require("./img2.jpg")} />
                        <img src={require("./img3.jpeg")} />
                        <img src={require("./img4.jpg")}  />
                        <img src={require("./img5.jpg")}  />
                    </div>
                    <div class="slide">
                        <img src={require("./img1.jpg")}  />
                        <img src={require("./img2.jpg")} />
                        <img src={require("./img3.jpeg")} />
                        <img src={require("./img4.jpg")}  />
                        <img src={require("./img5.jpg")}  />
                    </div>
                </div>
            </div>
           
        )
    }
}
