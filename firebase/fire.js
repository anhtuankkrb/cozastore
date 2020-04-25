import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCzbPxoRjGPiU1nKGrGCi07N2NOcMAdZvs",
  authDomain: "lean-project-nextjs.firebaseapp.com",
  databaseURL: "https://lean-project-nextjs.firebaseio.com",
  projectId: "lean-project-nextjs",
  storageBucket: "lean-project-nextjs.appspot.com",
  messagingSenderId: "736099786213",
  appId: "1:736099786213:web:06c024bd3307a6e4c6a30c",
};

// var firebaseConfig = {
//   apiKey: "AIzaSyCJ8NYJcFxxit5r7OoutGpZBoO8PdpEANw",
//   authDomain: "coza-store.firebaseapp.com",
//   databaseURL: "https://coza-store.firebaseio.com",
//   projectId: "coza-store",
//   storageBucket: "coza-store.appspot.com",
//   messagingSenderId: "1949884983",
//   appId: "1:1949884983:web:1bf6c69dcb115a59f915b2"
// };

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

let db = firebase.firestore().collection("products");
let storage = firebase.storage();
let dbUsers = firebase.firestore().collection("users");
let auth = firebase.auth();
let Timestamp = firebase.firestore.Timestamp;
let dbBlog = firebase.firestore().collection("blog");

export { db, storage, dbUsers, auth, Timestamp, dbBlog };
