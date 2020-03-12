import React, { Component } from 'react';
import {  Link } from "react-router-dom";
import '../components/headLine.css';


class Header extends Component {
    render(){
        return(
            <header className="header">
                 <Link to={this.props.to}  className="header-ico"><i className="fas fa-arrow-left" ></i></Link>
                 <h1>{this.props.name}</h1>
            </header>
                   
                   
          
        )
    }
}

export default  Header;