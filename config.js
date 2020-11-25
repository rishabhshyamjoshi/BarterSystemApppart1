import firebase from 'firebase';
require('@firebase/firestore')

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAvAVdj4s-nA7XqbU2Gl_aKNScv0tiGP8A",
    authDomain: "barter-system-app-39ebe.firebaseapp.com",
    databaseURL: "https://barter-system-app-39ebe.firebaseio.com",
    projectId: "barter-system-app-39ebe",
    storageBucket: "barter-system-app-39ebe.appspot.com",
    messagingSenderId: "503961607142",
    appId: "1:503961607142:web:2a4bd92047f9cb6ff69427"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
