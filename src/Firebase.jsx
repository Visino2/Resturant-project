import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDHpMKQ7MKltzKNNKCy_wiquQug5OM6j1o",
  authDomain: "restruant-project.firebaseapp.com",
  projectId: "restruant-project",
  storageBucket: "restruant-project.firebasestorage.app",
  messagingSenderId: "510958946083",
  appId: "1:510958946083:web:8dc3bd6fc8ac2e45d62e96",
  measurementId: "G-WW4G29Z3GG"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
 
