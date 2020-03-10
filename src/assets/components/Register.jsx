import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

const Register =()=>{

  return(
    <Fragment>
<label for="name">Nombre</label>
<input
  type="text"
  aria-label="nombre"
  aria-required="true"
  name="name"
/>
<label for="apellido">Apellido</label>
<input
  type="text"
  aria-label="apellido"
  aria-required="true"
  name="apellido"
/>
<label for="rut">Rut</label>
<input
  type="text"
  aria-label="rut"
  aria-required="true"
  name="rut"
/>
<label for="email">Email</label>
<input
  type="text"
  aria-label="email"
  aria-required="true"
  name="email"
/>
<label for="numerocelular">Número de Celular</label>
<input
  type="text"
  aria-label="numerocelular"
  aria-required="true"
  name="numerocelular"
/>

<button><Link to="/RegistroDatosPersonales">Repetir</Link></button><button><Link to="/InicioDeSeccion">Guardar</Link></button>
    </Fragment>
  )
}
export default Register;