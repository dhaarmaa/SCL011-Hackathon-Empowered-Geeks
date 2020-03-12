import React, { Fragment } from 'react';
import luz from '../img/luz.png';
import agua from '../img/agua.png';
import gas from '../img/gas.png';
import telefono from '../img/telefono.png';
import internet from '../img/internet.png';
import tvcable from '../img/tvcable.png';
import '../components/accountMenu.css';
import {  Link } from "react-router-dom";


const accountmenu=()=>{
 
  return(
    
    <Fragment>
      <div className="accountMenu">
        <button className="btnAccountMenu">
          <Link to="/Luz"><img src={luz} className="imgAccount" alt="luz" /></Link>
        </button>
        <button className="btnAccountMenu">
        <Link to="/Agua"><img src={agua} className="imgAccount" alt="agua" /></Link>
        </button>
        <button className="btnAccountMenu">
        <Link to="/Gas"><img src={gas} className="imgAccount" alt="gas" /></Link>
        </button>
        <button className="btnAccountMenu">
        <Link to="/TelefonoMovil">  <img src={telefono} className="imgAccount" alt="telefono" /></Link>
        </button>
        <button className="btnAccountMenu">
        <Link to="/TelefonoFijoInternet">  <img src={internet} className="imgAccount" alt="internet" /></Link>
        </button>
        <button className="btnAccountMenu">
        <Link to="/TvCable/Satelital">  <img src={tvcable} className="imgAccount" alt="tvcable" /></Link>
        </button>
        <div>
          <Link to="/" className="arrow"><i class="fas fa-arrow-left"></i></Link>
            <Link to ="/" className="arrow"><i class="fas fa-arrow-right"></i></Link>
        </div>
        <button className="btn-volume"><i class="fas fa-volume"></i></button>
      </div>



    </Fragment>)
};
export default accountmenu;
