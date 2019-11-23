import React, { Component } from 'react'

export default class Slideshow extends Component {
    render() { 
        return (

            <div className="wrapper">
                <div className="slider">
                    <div className="slide">
                        <img src={require("./img1.jpg")} alt="delicious italian Tegolino" />
                        <img src={require("./img2.jpg")} alt ="japanese KitKat" />
                        <img src={require("./img3.jpeg")} alt="italian Campari spritz" />
                        <img src={require("./img4.jpg")} alt="bavarian cuckoo clock" />
                        <img src={require("./img5.jpg")} alt="iranian ceramics" />
                    </div>
                    <div className="slide">
                        <img src={require("./img1.jpg")} alt="delicious italian Tegolino" />
                        <img src={require("./img2.jpg")} alt ="japanese KitKat" />
                        <img src={require("./img3.jpeg")} alt="italian Campari spritz" />
                        <img src={require("./img4.jpg")} alt="bavarian cuckoo clock" />
                        <img src={require("./img5.jpg")} alt="iranian ceramics" />
                    </div>
                </div>
            </div>
           
        )
    }
}
