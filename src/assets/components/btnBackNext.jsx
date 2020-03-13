import React, { Component, Fragment } from 'react';
import '../components/btnBackNext.css';
import arrowBaack from '../img/arrowBaack.png';
import arrowNext from '../img/arrowNext.png'

class BtnBackNext extends Component {
    render(){
        return(
            <Fragment>
                 <button className="btn-arrow"><img src={arrowBaack}/></button>
            <button className="btn-arrow"><img src={arrowNext}/></button>
            </Fragment>
           
        )
    }
}

export default BtnBackNext ;