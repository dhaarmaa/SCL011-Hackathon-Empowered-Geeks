import React, { Component } from 'react';
import '../components/navigation.css';
import microfono from '../img/microfono.png';

class BtnBackNext extends Component {
    render(){
        return(
            <button className="btn-volume"><img src={microfono}/></button>
            <button className="btn-volume"><img src={microfono}/></button>
        )
    }
}

export default BtnBackNext ;