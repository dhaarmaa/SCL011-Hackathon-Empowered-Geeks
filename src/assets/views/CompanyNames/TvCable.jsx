import React, { Fragment, Component } from 'react';
import {Link} from 'react-router-dom';
import './lightCompany.css';
import Header from '../../components/Headline'
import BtnBackNext from '../../components/btnBackNext';

const TvCable =()=>{
  return (
  <Fragment>
    <div className="LightCompanies">
      <Header to="/" name="TvCable"/>
      <p>Por favor, seleccione la empresa..</p>
        <Link to="/BusquedaPorVoz"><button className="btnCompany" aria-label="Cable Color" >Cable Color</button></Link>
        <Link to="/BusquedaPorVoz"><button className="btnCompany" aria-label="Cable de la Costa">Cable de la Costa</button></Link>
        <Link to="/BusquedaPorVoz"> <button className="btnCompany" aria-label="Telecable">Telecable</button></Link>
        <Link to="/BusquedaPorVoz">  <button className="btnCompany" aria-label="Tv Cable Sur" >Tv Cable Sur</button></Link>
        <Link to="/BusquedaPorVoz"> <button className="btnCompany" aria-label="Vtr Cuenta">Vtr Cuenta</button></Link>
        <Link to="/BusquedaPorVoz"> <button className="btnCompany" aria-label="Directv Instalaciones">Directv Instalaciones</button></Link>
        <Link to="/BusquedaPorVoz"> <button className="btnCompany" aria-label="Directv Mensualidades" >Directv Mensualidades</button></Link>
        <Link to="/BusquedaPorVoz"> <button className="btnCompany" aria-label="Tuves Equipos">Tuves Equipos</button></Link>
        <Link to="/BusquedaPorVoz"> <button className="btnCompany" aria-label="Tuves Instalacione">Tuves Instalacione</button></Link>
        <Link to="/BusquedaPorVoz"> <button className="btnCompany" aria-label="Grupo Setting">Grupo Setting</button></Link>
        <Link to="/BusquedaPorVoz"> <button className="btnCompany" aria-label="Loncomilla" >Loncomilla</button></Link>
        <Link to="/BusquedaPorVoz"> <button className="btnCompany" aria-label="Multicom">Multicom</button></Link>
        <Link to="/BusquedaPorVoz"> <button className="btnCompany" aria-label="Mundo Pacifico Hogar">Mundo Pacifico Hogar</button></Link>
        <Link to="/BusquedaPorVoz"> <button className="btnCompany" aria-label="Senalmax" >Senalmax</button></Link>
        <BtnBackNext to="/CuentaUnica"/> 
        <button className="btn-volume" ><i class="fas fa-microphone fa-5x"></i></button>
      </div>
  </Fragment>
    

  )
};
export default TvCable;