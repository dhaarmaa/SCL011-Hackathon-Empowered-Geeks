import React, { Fragment } from 'react'
import Accountmenu from '../../components/Accountmenu'
import '../Uniqueaccount/uniqueaccount.css';
import Header from '../../components/Headline';

const Uniqueaccount=()=>{
  return(
    <Fragment>
      <div className="containerTwo">
      <Header name="Pago único"/>
      <Accountmenu/>
      </div>
      
    </Fragment>
  )
}
export default Uniqueaccount;