import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCzbPxoRjGPiU1nKGrGCi07N2NOcMAdZvs",
  authDomain: "lean-project-nextjs.firebaseapp.com",
  databaseURL: "https://lean-project-nextjs.firebaseio.com",
  projectId: "lean-project-nextjs",
  storageBucket: "lean-project-nextjs.appspot.com",
  messagingSenderId: "736099786213",
  appId: "1:736099786213:web:06c024bd3307a6e4c6a30c"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

let db = firebase.database().ref();

export default db;
