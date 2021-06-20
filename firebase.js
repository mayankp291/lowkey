import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBU7nqA_8l1xmdpebeY0cJ90KobpOwZ3gE",
  authDomain: "lowkey-2d7de.firebaseapp.com",
  projectId: "lowkey-2d7de",
  storageBucket: "lowkey-2d7de.appspot.com",
  messagingSenderId: "525918258962",
  appId: "1:525918258962:web:235f2406bef8608a9615cb",
};

firebase.initializeApp(firebaseConfig);

export default firebase;