import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import '../components/optioninit.css';
import Header from '../components/Headline';


const Optioninit=()=>{
  //let message = document.querySelector('#message');
  const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
  const SpeechGrammarList = window.webkitSpeechGrammarList || window.SpeechGrammarList;
  // const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  // const SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;

  let grammar = '#JSGF V1.0;'

  let recognition = new SpeechRecognition();
  let speechRecognitionList = new SpeechGrammarList();
  speechRecognitionList.addFromString(grammar, 1);
  recognition.grammars = speechRecognitionList;
  recognition.lang = 'es';
  recognition.interimResults = false;

  recognition.onresult = function (event) {
    let last = event.results.length - 1;
    let command = event.results[last][0].transcript;
    //message.textContent = 'Voice Input: ' + command + '.';
    console.log('Voice Input: ' + command);

    if (command.toLowerCase() === 'seleccionar pago único') {
      let lightSelection = document.getElementById('pago-unico');
      lightSelection.click();
      console.log("DOMelement:", lightSelection);
      console.log("click en pago unico");
    }
    else if (command.toLowerCase() === 'seleccionar registrar cuenta') {
      document.querySelector('#registrar-cuenta').click();
    }
    else if (command.toLowerCase() === 'seleccionar cuentas registradas') {
      document.querySelector('#cuentas-registradas').click();
    }
  };

  recognition.onspeechend = function () {
    recognition.stop();
  };

  recognition.onerror = function (event) {
    console.log('Error occurred in recognition: ' + event.error);
  };
  // const botonVoz = document.getElementById('escuchar')
  // botonVoz.addEventListener('click', function(){
  //     recognition.start();

  // });

  function simulateClick(event) {
    console.log("simulateClick");
  }
  return(
   < Fragment >
   <div className="container-option">
        <Header to="/" name="categorías"/>

        <p>Por favor, seleccione la acción que desea realizar.</p>
        <div className="category">
          <Link to="/CuentaUnica" id="pago-unico" className="subCategory">Pago Unico</Link>
          <Link to ="/RegistroDeCuenta" id="registrar-cuenta" className="subCategory">Registrar Cuenta</Link>
          <Link to="/CuentaRegistrada" id="cuentas-registradas" className="subCategory">Cuentas Registradas</Link>
        </div>
        <button className="btn-volume"><i class="fas fa-volume"></i></button>
   </div>
  

   </Fragment>

  )
}
export default Optioninit;