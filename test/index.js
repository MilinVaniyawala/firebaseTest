// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import {
  getDatabase,
  ref,
  child,
  get,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWHBB_jCyJf02cWjL2xl2OF5jcOoKsO8o",
  authDomain: "http5214-cb8a7.firebaseapp.com",
  projectId: "http5214-cb8a7",
  storageBucket: "http5214-cb8a7.appspot.com",
  messagingSenderId: "110003101873",
  appId: "1:110003101873:web:e4ef0c56551bb524dc4290",
  measurementId: "G-YVGC7BSF99",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Database
const database = getDatabase();
const messages = ref(database, "/messages");

// If we get Data from the firebase, it will give real time data, means the data is change , it will directly reflect here.
onValue(
  messages,
  (snapshot) => {
    // console.log(snapshot);
    const ul = document.getElementById("messages");
    ul.replaceChildren();

    snapshot.forEach((childSnapshot) => {
      const key = childSnapshot.key;
      const value = childSnapshot.val();

      //   console.log(key);
      //   console.log(value);

      const text = document.createTextNode(value.message);
      const li = document.createElement("li");

      li.appendChild(text);
      ul.appendChild(li);
    });
  },
  {
    onlyOnce: false,
  }
);
