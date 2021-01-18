import firebase from "firebase";
// import firebase from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyD_fvryT7IHbdZPhUKABnUgJvLwmvux0zk",
  authDomain: "the-crease.firebaseapp.com",
  databaseURL: "https://the-crease.firebaseio.com",
  projectId: "the-crease",
  storageBucket: "the-crease.appspot.com",
  messagingSenderId: "331216110488",
  appId: "1:331216110488:web:b1e4dd16636663585c21ed",
};
firebase.initializeApp(firebaseConfig);
export default firebase;
