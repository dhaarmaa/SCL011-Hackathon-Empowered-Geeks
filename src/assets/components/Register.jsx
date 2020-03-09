import React, { Fragment } from 'react';

const Register =()=>{

  return(
    <Fragment>

<input
  type="text"
  aria-label="nombre"
  aria-required="true"
  name="name"
/>
<input
  type="text"
  aria-label="apellido"
  aria-required="true"
  name="apellido"
/>
<input
  type="text"
  aria-label="rut"
  aria-required="true"
  name="rut"
/>
<input
  type="text"
  aria-label="email"
  aria-required="true"
  name="email"
/>
<input
  type="text"
  aria-label="numerocelular"
  aria-required="true"
  name="numerocelular"
/>

<button>Repetir</button><button>Guardar</button>
    </Fragment>
  )
}
export default Register;