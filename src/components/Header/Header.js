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
            <button type="button" id="mobile-nav-toggle"><i className="fa fa-bars"></i></button>
            <header id="header" className="header">
                <div className="container">

                <div id="logo" className="pull-left">
                    <h1><a href="index.html"><img src="https://datostechnology.com/public_html/assets1/img/detosLogoWeb.png" id="logoImg" width="100px" /></a></h1>
                
                </div>

                <nav id="nav-menu-container">
                    <ul className="nav-menu sf-js-enabled sf-arrows">
                    <li className="menu-active"><a href="#">Home</a></li>
                    <li className=""><a href="#get-started">Get started</a></li>
                    <li className=""><a href="#about-us">About</a></li>
                    <li className=""><a href="#features">Services</a></li>
                    <li className=""><a href="#team">Technologies</a></li>
                    <li className=""><a href="#blog">Articles</a></li>
                    <li className=""><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                </div>
            </header>
            </React.Fragment>
            

            
        );
    }

}


