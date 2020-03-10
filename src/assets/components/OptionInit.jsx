import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

const Optioninit=()=>{

  return(
   < Fragment >
   <button><Link to="/CuentaUnica">Pago Unico</Link></button>
   <button><Link to ="/RegistroDeCuenta">Registra Cuenta</Link></button>
   <button><Link to="">Cuentas Registradas</Link></button>
   </Fragment>

  )
}
export default Optioninit;