import React, { Fragment, Component } from 'react'
import './lightCompany.css';
import Header from '../../components/Headline'
import BtnBackNext from '../../components/btnBackNext';

const NetCompanies =()=>{
  return (
  <Fragment  >
     <div className="LightCompanies">
    <Header to="/" name="Internet"/>
    <p>Por favor, seleccione la empresa..</p>
    <button className="btnCompany" aria-label="Claro Movil">Claro Movil</button>
    <button className="btnCompany" aria-label="Claro Recarga Online">Claro Recarga Online</button>
    <button className="btnCompany" aria-label="Entel Pcs">Entel Pcs</button>
    <button className="btnCompany" aria-label="Entel Pcs Recarga online">Entel Pcs Recarga online</button>
    <button className="btnCompany" aria-label="Wom">Wom</button>
    <button className="btnCompany" aria-label="Movistar Hogar Movil">GMovistar Hogar Movil</button>
    {/* <button aria-label="Virgin Mobile">Virgin Mobile</button>
    <button aria-label="Movistar Recarga Online">Movistar Recarga Online</button>
    <button aria-label="Movistar  Rut Movil">Movistar  Rut Movil</button>
    <button aria-label="Netline Mobile">Netline Mobile</button>
    <button aria-label="Claro Empresas" >Claro Empresas</button>
    <button aria-label="JJD Comunicaciones">JJD Comunicaciones</button>
    <button aria-label="Virgin Empresas">Virgin Empresas</button>  */}
    <BtnBackNext to="/CuentaUnica"/> 
    <button className="btn-volume" ><i class="fas fa-microphone fa-5x"></i></button>
    </div>
  </Fragment>)
}
export default NetCompanies;