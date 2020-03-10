import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import Ellipse from "../img/Ellipse.png"

const Acces =()=>{

  return(<Fragment>
    <p>Mensaje de Bienvenida</p>
    <img src={Ellipse} alt="fotoAcceso"/>
    <button><Link to="/InicioDeSeccion">Ingresa</Link></button><button><Link to="/RegistroDatosPersonales">Registrate</Link></button>
  </Fragment>)
}
export default Acces;

