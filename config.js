import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyAodD6Stb6trS5S2H8cKQvyWS-sPkEi704",
    authDomain: "e-ride-stage-4-d3d72.firebaseapp.com",
    projectId: "e-ride-stage-4-d3d72",
    storageBucket: "e-ride-stage-4-d3d72.appspot.com",
    messagingSenderId: "526570736237",
    appId: "1:526570736237:web:ebed3f56feaeb43086cd64"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();