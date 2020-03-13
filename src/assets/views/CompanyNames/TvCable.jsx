import React, { Fragment, Component } from 'react'
import '../Home/Home.css';
import { Link } from "react-router-dom";
const TvCable =()=>{
  return (
  <Fragment >
    <Link to="/BusquedaPorVoz"><button aria-label="Cable Color" >Cable Color</button></Link>
    <Link to="/BusquedaPorVoz"><button aria-label="Cable de la Costa">Cable de la Costa</button></Link>
    <Link to="/BusquedaPorVoz"> <button aria-label="Telecable">Telecable</button></Link>
    <Link to="/BusquedaPorVoz">  <button aria-label="Tv Cable Sur" >Tv Cable Sur</button></Link>
    <Link to="/BusquedaPorVoz"> <button aria-label="Vtr Cuenta">Vtr Cuenta</button></Link>
    <Link to="/BusquedaPorVoz"> <button aria-label="Directv Instalaciones">Directv Instalaciones</button></Link>
    <Link to="/BusquedaPorVoz"> <button aria-label="Directv Mensualidades" >Directv Mensualidades</button></Link>
    <Link to="/BusquedaPorVoz"> <button aria-label="Tuves Equipos">Tuves Equipos</button></Link>
    <Link to="/BusquedaPorVoz"> <button aria-label="Tuves Instalacione">Tuves Instalacione</button></Link>
    <Link to="/BusquedaPorVoz"> <button aria-label="Grupo Setting">Grupo Setting</button></Link>
    <Link to="/BusquedaPorVoz"> <button aria-label="Loncomilla" >Loncomilla</button></Link>
    <Link to="/BusquedaPorVoz"> <button aria-label="Multicom">Multicom</button></Link>
    <Link to="/BusquedaPorVoz"> <button aria-label="Mundo Pacifico Hogar">Mundo Pacifico Hogar</button></Link>
    <Link to="/BusquedaPorVoz"> <button aria-label="Senalmax" >Senalmax</button></Link>

  </Fragment>)
}
export default TvCable;