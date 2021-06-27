import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { ref, onUnmounted } from "vue";

const firebaseConfig = {
  apiKey: "AIzaSyBU7nqA_8l1xmdpebeY0cJ90KobpOwZ3gE",
  authDomain: "lowkey-2d7de.firebaseapp.com",
  projectId: "lowkey-2d7de",
  storageBucket: "lowkey-2d7de.appspot.com",
  messagingSenderId: "525918258962",
  appId: "1:525918258962:web:235f2406bef8608a9615cb",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const usersCollection = db.collection("passwords");

export const createUser = (user) => {
  return usersCollection.add(user);
};

export const getUser = async (id) => {
  const user = await usersCollection.doc(id).get();
  return user.exists ? user.data() : null;
};

export const updateUser = (id, user) => {
  return usersCollection.doc(id).update(user);
};

export const deleteUser = (id) => {
  return usersCollection.doc(id).delete();
};


export const useLoadUsers = () => {
  const users = ref([]);
  const close = usersCollection.onSnapshot((snapshot) => {
    users.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });
  onUnmounted(close);
  return users;
};

export default firebase;
