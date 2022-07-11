import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// const firebaseConfig = {
//   apiKey: "AIzaSyDYaSF3LAoP_uinehBktJqBjDUe0foR7aM",
//   authDomain: "movie-search-374dc.firebaseapp.com",
//   projectId: "movie-search-374dc",
//   storageBucket: "movie-search-374dc.appspot.com",
//   messagingSenderId: "158469716042",
//   appId: "1:158469716042:web:5372bbc4e9ff3d310aceb3"
// };
const firebaseApp=firebase.initializeApp({
  apiKey: "AIzaSyDYaSF3LAoP_uinehBktJqBjDUe0foR7aM",
  authDomain: "movie-search-374dc.firebaseapp.com",
  projectId: "movie-search-374dc",
  storageBucket: "movie-search-374dc.appspot.com",
  messagingSenderId: "158469716042",
  appId: "1:158469716042:web:5372bbc4e9ff3d310aceb3"
});


// const app = initializeApp(firebaseConfig);
// export const auth=getAuth(app);

// export default app;

const db=firebaseApp.firestore();
const auth=firebase.auth();
const storage=firebase.storage();
export{db,auth,storage};


// export default app;