import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import '../components/optioninit.css';
import Header from '../components/Headline';
import Microphone from '../components/btnMicrofono';


const Optioninit=()=>{

  return(
   < Fragment >
   <div className="container-option">
        <Header to="/" name="categorías"/>

        <p>Por favor, seleccione la acción que desea realizar.</p>
        <div className="category">
          <Link to="/CuentaUnica" className="subCategory">Pago Unico</Link>
          <Link to ="/RegistroDeCuenta" className="subCategory">Registra Cuenta</Link>
          <Link to="/CuentaRegistrada" className="subCategory">Cuentas Registradas</Link>
        </div>
       <Microphone/>
   </div>
  

   </Fragment>

  )
}
export default Optioninit;