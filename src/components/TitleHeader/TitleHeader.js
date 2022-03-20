import React, { Component } from 'react';
import './TitleHeader.scss';

export default class TitleHeader extends Component {
    backButton;
    constructor(props) {
        super(props);

        console.log(this.props.backButton);
    }

    render() {
        return (
            <div className="header-background">
                <div className="wrapper">
                    <a className={"back-link " + (this.props.backButton ? 'show' : 'hidden')} href={this.props.href}><div className="back-text hide-back-button">Back</div></a>
                    <h3>{this.props.title}</h3>
                </div>
            </div>
        );
    }

}


