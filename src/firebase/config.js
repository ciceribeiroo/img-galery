import  firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDEhxFl51iPdOMWKpN6tbL0xvRTUAJhh9E",
    authDomain: "firegram-d3bd3.firebaseapp.com",
    projectId: "firegram-d3bd3",
    storageBucket: "firegram-d3bd3.appspot.com",
    messagingSenderId: "398159174907",
    appId: "1:398159174907:web:eb6e5416a1f6884aac645e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  
  export { projectStorage, projectFirestore, timestamp };