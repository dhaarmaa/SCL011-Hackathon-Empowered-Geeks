import React, { Fragment } from 'react'
import Accountmenu from '../../components/Accountmenu'
import '../Registeraccount/registeraccount.css';
import Header from '../../components/Headline.jsx';

const Registeraccount =()=>{
return(
  <Fragment>

<div className="containerTwo">
      <Header  to="/InicioDeSeccion"name="Registra tu cuenta"/>
      <Accountmenu/>
      </div>
  </Fragment>
)
}
export default Registeraccount;