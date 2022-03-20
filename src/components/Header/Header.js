import React, { Component } from 'react';
import './Header.scss';

export default class Header extends Component {
    backButton;
    constructor(props) {
        super(props);

        console.log(this.props.backButton);
    }

    render() {
        return (
            <React.Fragment>
            <header id="header" className="header">
                <section class="top-nav">
                <div>
                    <div id="logo" className="pull-left">
                        <h1><a href="index.html"><img src="https://datostechnology.com/public_html/assets1/img/detosLogoWeb.png" id="logoImg" width="100px" /></a></h1>
                    </div>
                </div>
                <input id="menu-toggle" type="checkbox" />
                <label class='menu-button-container' for="menu-toggle">
                    <div class='menu-button'></div>
                </label>
                <ul class="nav-menu menu">
                    <li className="menu-active"><a href="#">Home</a></li>
                    <li className=""><a href="#about-us">About</a></li>
                    <li className=""><a href="#features">Services</a></li>
                    <li className=""><a href="#team">Technologies</a></li>
                    <li className=""><a href="#blog">Articles</a></li>
                    <li className=""><a href="#contact">Contact</a></li>
                </ul>
            </section>
            </header>

           
            </React.Fragment>
            

            
        );
    }

}


