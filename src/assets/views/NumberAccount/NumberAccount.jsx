import React, { Fragment, Component } from 'react'
//import Accountmenu from '../../components/Accountmenu'
import '../Registeraccount/registeraccount.css';
import Header from '../../components/Headline.jsx';
//import Microphone from '../../components/btnMicrophone'
const NumberAccount = () => {
return(
  <Fragment>
<Header  name="Busqueda por voz"/>
<p>Por favor, indica el numero de la cuenta</p>

<input
          placeholder="Número identificador de la cuenta"
          type="text"
          aria-label="Numero de cuenta"
          aria-required="true"
          name="ncuenta" 
        />
    {/* <button >
        <Link to="/"><img src={}  alt="buscar" /></Link>
        </button> 
        {/* <Microphone/> */}
  </Fragment>

)
}
export default NumberAccount;