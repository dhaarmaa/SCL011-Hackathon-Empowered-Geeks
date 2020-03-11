import React, { Fragment } from "react";
import "../components/acces.css";
import Navigation from '../components/Navigation.jsx';
import logo from '../img/ojo.png';

const Acces = () => {
  return (
    <Fragment>
      <div className="acces">
        <h1 className="headLine">Bienvenido a Vipago</h1>
        <img src={logo} className="logo" alt="ojo parchado" />
        <Navigation
          to="/InicioDeSeccion"
          name="Ingresa"
          too="/RegistroDatosPersonales"
          namee="Regístrate"
        />
      </div>
    </Fragment>
  );
};
export default Acces;
