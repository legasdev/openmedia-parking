import { writable } from "svelte/store";
import { initializeApp } from "firebase/app";

function createApp() {
  const firebaseConfig = {
    apiKey: "AIzaSyCWz0FIugCN0THXx1FYvhtR0qnLkONKELI",
    authDomain: "openmedia-app.firebaseapp.com",
    // authDomain: "localhost",
    databaseURL:
      "https://openmedia-parking-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "openmedia-app",
    storageBucket: "openmedia-app.appspot.com",
    messagingSenderId: "36566002866",
    appId: "1:36566002866:web:681fa8fd77c066dd1c6dab",
  };

  return writable(initializeApp(firebaseConfig));
}

const appStore = createApp();

export default appStore;
