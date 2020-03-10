import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Route, Switch } from 'react-router-dom';
import Home from '../src/assets/views/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/home" component={ Home }/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
