import React, { Component } from 'react';
import {  Link } from "react-router-dom";
import '../components/headLine.css';
import Arrow from '../img/arrowBack.png';



class Header extends Component {
    render(){
        return(
            <header className="header">
                 <Link to={this.props.to}  className="header-ico">
                <img  className="img-headline" src={Arrow} />
                 </Link>
                 <h1>{this.props.name}</h1>
            </header>

        )
    }
}

export default  Header;