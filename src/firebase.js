// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDa1xTnDauRsRbSGUtEdiqNMKgELyU0gVE",
  authDomain: "todo-app-mohib.firebaseapp.com",
  databaseURL: "https://todo-app-mohib.firebaseio.com",
  projectId: "todo-app-mohib",
  storageBucket: "todo-app-mohib.appspot.com",
  messagingSenderId: "630407214102",
  appId: "1:630407214102:web:9581b18e210130655eb137",
  measurementId: "G-5J9BQRP8EP",
});

const db = firebaseApp.firestore();

export default db;
