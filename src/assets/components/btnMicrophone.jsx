import React, { Component } from 'react';
import '../components/navigation.css';
import {  Link } from "react-router-dom";
import microfono from '../img/microfono.png';

class Microphone extends Component {
    render(){
        return(
            <button className="btn-volume">
            <img src={microfono}/>
          </button>
        )
    }
}

export default Microphone ;