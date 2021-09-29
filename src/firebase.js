import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCgJocBIgjrxOFrnvLjFXAGS76CxJ09zps",
    authDomain: "whats-app-clone-f9dec.firebaseapp.com",
    projectId: "whats-app-clone-f9dec",
    storageBucket: "whats-app-clone-f9dec.appspot.com",
    messagingSenderId: "511428144153",
    appId: "1:511428144153:web:7567fcf69430a9deb24e88",
    measurementId: "G-J0PG73E1CV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;