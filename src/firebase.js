import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBrl8LVfYaag3DSvJjPsakL__iQ2Cx1Xlc",
  authDomain: "snapchat-clone-88628.firebaseapp.com",
  projectId: "snapchat-clone-88628",
  storageBucket: "snapchat-clone-88628.appspot.com",
  messagingSenderId: "853436298845",
  appId: "1:853436298845:web:10aa8ee734f658d57e7fb4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  auth,
  storage,
  provider
};