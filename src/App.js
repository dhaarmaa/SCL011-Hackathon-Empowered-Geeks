import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
  import Home  from './assets/views/Home/Home'
  import RegisterDate from './assets/views/RegisterDate/RegisterDate'
  import InitSection from './assets/views/Section/InitSection'
  import Uniqueaccount from './assets/views/Uniqueaccount/Uniqueaccount'
  import Registeraccount from './assets/views/Registeraccount/Registeraccount'
  import '../src/style.css';
// import './App.css';
// import { Router, Route, Switch } from 'react-router-dom';
// import Home from '../src/assets/views/Home/Home';

function App() {
  return (
  <Router>
    <Route exact path="/" component ={Home}/>
    <Route path="/Home" component ={Home}/>
    <Route path ="/InicioDeSeccion" component={InitSection}/>
    <Route path ="/RegistroDatosPersonales" component={RegisterDate} />
    <Route path ="/CuentaUnica" component={Uniqueaccount} />
    <Route path ="/RegistroDeCuenta" component={Registeraccount} />
  </Router>
  );
}

export default App;

