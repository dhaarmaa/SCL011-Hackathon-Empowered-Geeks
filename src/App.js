import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { useFirebaseApp } from "reactfire";
import '../src/style.css';
import Home from './assets/views/Home/Home'
import RegisterDate from './assets/views/RegisterDate/RegisterDate';
import InitSection from './assets/views/Section/InitSection';
import Uniqueaccount from './assets/views/Uniqueaccount/Uniqueaccount';
import Registeraccount from './assets/views/Registeraccount/Registeraccount';
import CellCompanies from './assets/views/CompanyNames/CellCompanies';
import GasCompanies from './assets/views/CompanyNames/GasCompanies';
import WaterCompanies from './assets/views/CompanyNames/WaterCompanies';
import NetCompanies from './assets/views/CompanyNames/NetCompanies';
import TvCable from './assets/views/CompanyNames/TvCable';
import LigthCompanies from './assets/views/CompanyNames/LightCompanies';
import AccountRegistered from './assets/views/AccountRegistered/AccountRegistered';
import '../src/style.css';

function App() {
  const firebase = useFirebaseApp();

  return (
  <Router>
<Route exact path="/" component ={Home}/>
<Route path="/Home" component ={Home}/>
<Route path ="/InicioDeSeccion" component={InitSection}/>
<Route path ="/RegistroDatosPersonales" component={RegisterDate}/>
<Route path ="/CuentaUnica" component={Uniqueaccount} />
<Route path ="/RegistroDeCuenta" component={Registeraccount} />
<Route path ="/CuentasRegistradas" component={AccountRegistered} />
<Route path ="/Luz" component={LigthCompanies} />
<Route path ="/Agua" component={WaterCompanies} />
<Route path ="/TelefonoMovil" component={CellCompanies} />
<Route path ="/TelefonoFijoInternet" component={NetCompanies} />
<Route path ="/Gas" component={GasCompanies} />
<Route path ="/TvCable/Satelital" component={TvCable} />
</Router>
  );
}

export default App;

