import React, { Component } from 'react';
import '../../style.css';
import {  Link } from "react-router-dom";

class Navigation extends Component {
    render(){
        return(
            <nav className="navbar">
                    <Link to={this.props.to} className="Navigation-link">{this.props.name}</Link>
                    <Link to={this.props.too} className="Navigation-link">{this.props.namee}</Link>
            </nav>
        )
    }
}

export default  Navigation;