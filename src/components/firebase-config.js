import firebase from 'firebase'
require('firebase/firestore')
var config = {
  apiKey: "AIzaSyBDLff2wdQgyLV7KFiFe-hcpU9maIPq5a0",
  authDomain: "quiz-game-8a743.firebaseapp.com",
  databaseURL: "https://quiz-game-8a743.firebaseio.com",
  projectId: "quiz-game-8a743",
  storageBucket: "quiz-game-8a743.appspot.com",
  messagingSenderId: "765215725826",
  appId: "1:765215725826:web:4d02f4d5785c8bea880a1b",
  measurementId: "G-9CYXDY202H"
}
firebase.initializeApp(config)

const db = firebase.firestore();
export default db;