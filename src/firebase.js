import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDdjSid6O9sB3BZq9iKJk-NyiZFN3ZVWZE",
    authDomain: "disneyplus-clone-703c8.firebaseapp.com",
    projectId: "disneyplus-clone-703c8",
    storageBucket: "disneyplus-clone-703c8.appspot.com",
    messagingSenderId: "818109477071",
    appId: "1:818109477071:web:de92b2e7f0ca75a27cc7ba",
    measurementId: "G-XXRLKYE0F7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;

