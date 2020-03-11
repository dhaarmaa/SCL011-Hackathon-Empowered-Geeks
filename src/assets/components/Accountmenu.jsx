import React, { Fragment } from 'react';
import luz from '../img/luz.png'
import agua from '../img/agua.png'
import gas from '../img/gas.png'
import telefono from '../img/telefono.png'
import internet from '../img/internet.png'
import tvcable from '../img/tvcable.png'
import '../components/accountMenu.css';

const accountmenu = () => {

  return (
    <Fragment>
      <div className="accountMenu">
        <button className="btnAccountMenu">
          <img src={luz} className="imgAccount" alt="luz" />
        </button>
        <button className="btnAccountMenu">
          <img src={agua} className="imgAccount" alt="agua" />
        </button>
        <button className="btnAccountMenu">
          <img src={gas} className="imgAccount" alt="gas" />
        </button>
        <button className="btnAccountMenu">
          <img src={telefono} className="imgAccount" alt="telefono" />
        </button>
        <button className="btnAccountMenu">
          <img src={internet} className="imgAccount" alt="internet" />
        </button>
        <button className="btnAccountMenu">
          <img src={tvcable} className="imgAccount" alt="tvcable" />
        </button>
      </div>



    </Fragment>)
}
export default accountmenu;