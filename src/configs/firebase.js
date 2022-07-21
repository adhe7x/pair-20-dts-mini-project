import { initializeApp as firebase } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDTLkk_ZKzIiR0kV0QDzBUdiGvXght1oxw",
  authDomain: "movie-app-mini.firebaseapp.com",
  projectId: "movie-app-mini",
  storageBucket: "movie-app-mini.appspot.com",
  messagingSenderId: "479179142132",
  appId: "1:479179142132:web:d1eb3325982a51e522bfa1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;