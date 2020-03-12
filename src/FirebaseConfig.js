import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";

export default {
  apiKey: "AIzaSyBccdyJD7B2XV1OBU1wA_RIcem8YNNAVrg",
  authDomain: "citi-vipago.firebaseapp.com",
  databaseURL: "https://citi-vipago.firebaseio.com",
  projectId: "citi-vipago",
  storageBucket: "citi-vipago.appspot.com",
  messagingSenderId: "854416593626",
  appId: "1:854416593626:web:50bcc4db7af23ac61d0be3"
}
firebase.initializeApp({
  apiKey: "AIzaSyBccdyJD7B2XV1OBU1wA_RIcem8YNNAVrg",
  authDomain: "citi-vipago.firebaseapp.com",
  databaseURL: "https://citi-vipago.firebaseio.com",
  projectId: "citi-vipago",
  storageBucket: "citi-vipago.appspot.com",
  messagingSenderId: "854416593626",
  appId: "1:854416593626:web:50bcc4db7af23ac61d0be3"
});

export let db = firebase.firestore();
