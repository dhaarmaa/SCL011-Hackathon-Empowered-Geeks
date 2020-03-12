import React, { Fragment, Component } from 'react'
import Acces from '../../components/Acces'
import '../CompanyNames/lightCompany.css';
import Header from '../../components/Headline'
import { Link } from 'react-router-dom';

const LightCompanies = () => {
  return (
  <Fragment >
    <div className="LightCompanies">
      <Header to="/" name="Agua"/>
    <p>Por favor, seleccione la empresa de su cuenta.</p>
    <button  className="btnCompany" aria-label="Casa Blanca" >Casa Blanca</button>
    <button className="btnCompany" aria-label="Cooperativa electrica Curico">CEC Cooperativa electrica Curico</button>
    <button className="btnCompany" aria-label="CGE">CGE</button>
    <button className="btnCompany" aria-label="Chilquinta">Chilquinta</button>
    <button className="btnCompany"  aria-label="Codiner">Codiner</button>
    <button className="btnCompany" aria-label="Coelcha">Coelcha</button>
    <button className="btnCompany" aria-label="Coopelan">Coopelan</button>
   {/* <button className="btnCompany" aria-label="Edelaysen">Edelaysen</button>
    <button className="btnCompany" aria-label="Edelmag">Edelmag</button>
    <button className="btnCompany" aria-label="Eepa">Eepa</button>
    <button className="btnCompany" aria-label="Enel">Enel Distribución</button>
    <button className="btnCompany" aria-label="Enor Chile">Enor Chile</button>
    <button className="btnCompany" aria-label="Frontel">Frontel</button>
    <button className="btnCompany" aria-label="Litoral">Litoral</button>
    <button className="btnCompany" aria-label="Luz Andes">Luz Andes</button>
    <button className="btnCompany" aria-label="Luz Linares">Luz Linares</button>
    <button className="btnCompany" aria-label="Luz Osorno">Luz Osorno</button>
    <button className="btnCompany" aria-label="Luz Parral">Luz Parral</button>
    <button className="btnCompany" aria-label="Saesa">Saesa</button> */}

    <Link className="linkk">back</Link>
    <Link className="linkk">next</Link>
    </div>

    
  </Fragment>)
}
export default LightCompanies;