import React, { Fragment } from 'react';
import luz from '../img/luz.png';
import agua from '../img/agua.png';
import gas from '../img/gas.png';
import telefono from '../img/telefono.png';
import internet from '../img/internet.png';
import tvcable from '../img/tvcable.png';
import '../components/accountMenu.css';
import {  Link } from "react-router-dom";


const accountmenu=()=>{

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

  recognition.onresult = function(event) {
      let last = event.results.length - 1;
      let command = event.results[last][0].transcript;
      //message.textContent = 'Voice Input: ' + command + '.';
      console.log('Voice Input: ' + command);

      if(command.toLowerCase() === 'seleccionar luz'){
        let lightSelection = document.getElementById('luz');
        lightSelection.click();
        console.log("DOMelement:", lightSelection);
        console.log("click en luz");
      }
      else if (command.toLowerCase() === 'seleccionar agua'){
          document.querySelector('#agua').OnClick = true;
      }
      else if (command.toLowerCase() === 'seleccionar gas'){
          document.querySelector('#gas').OnClick = true;
      }
      else if (command.toLowerCase() === 'seleccionar telefono'){
          document.querySelector('#telefono').OnClick = true;
      } else if (command.toLowerCase() === 'seleccionar internet'){
        document.querySelector('#internet').OnClick = true;
    } else if (command.toLowerCase() === 'seleccionar cable'){
      document.querySelector('#cable').OnClick = true;
  } 
  };

  recognition.onspeechend = function() {
      recognition.stop();
  };

  recognition.onerror = function(event) {
      console.log('Error occurred in recognition: ' + event.error) ;
  };        
  // const botonVoz = document.getElementById('escuchar')
  // botonVoz.addEventListener('click', function(){
  //     recognition.start();

  // });

  function simulateClick(event)  {
    console.log("simulateClick");
  }
  
  //const inputRef = React.useRef(null)
  

  return(
    
    <Fragment>
      <div className="accountMenu">
        
          <Link to="/Luz"><img src={luz} className="imgAccount" alt="luz" />
          <button id="luz" className="btnAccountMenu" ref={simulateClick} onClick={()=> console.log('clicked')}></button>
          </Link>
        
        <button id="agua" className="btnAccountMenu">
        <Link to="/Agua"><img src={agua} className="imgAccount" alt="agua" /></Link>
        </button>
        <button id="gas" className="btnAccountMenu">
        <Link to="/Gas"><img src={gas} className="imgAccount" alt="gas" /></Link>
        </button>
        <button id="telefono" className="btnAccountMenu">
        <Link to="/TelefonoMovil">  <img src={telefono} className="imgAccount" alt="telefono" /></Link>
        </button>
        <button id="internet" className="btnAccountMenu">
        <Link to="/TelefonoFijoInternet">  <img src={internet} className="imgAccount" alt="internet" /></Link>
        </button>
        <button id="cable" className="btnAccountMenu">
        <Link to="/TvCable/Satelital">  <img src={tvcable} className="imgAccount" alt="tvcable" /></Link>
        </button>
        <div>
          <Link to="/" className="arrow"><i class="fas fa-arrow-left"></i></Link>
            <Link to ="/" className="arrow"><i class="fas fa-arrow-right"></i></Link>
        </div>
        <span id="message"></span>
        <button id="escuchar" className="btnAccountMenu" onClick={recognition.start()}>APRETAR PARA GRABAR</button>
      </div>



    </Fragment>)
};
export default accountmenu;
