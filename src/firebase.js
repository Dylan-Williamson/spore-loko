import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB7szsGO-3V_xRoqPUueUp7eAcoAP4ckHo",
  authDomain: "spore-loko.firebaseapp.com",
  projectId: "spore-loko",
  storageBucket: "spore-loko.appspot.com",
  messagingSenderId: "90554170666",
  appId: "1:90554170666:web:b994f003df2f5d3b027253",
  measurementId: "G-NFY144E3BG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();


export {db, auth}