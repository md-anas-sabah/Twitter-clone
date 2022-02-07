import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyCFM8-UcOtdynjQCv25tRepM8ddpxyq2jk",
//   authDomain: "twitter-clone-b8bd2.firebaseapp.com",
//   projectId: "twitter-clone-b8bd2",
//   storageBucket: "twitter-clone-b8bd2.appspot.com",
//   messagingSenderId: "1086029191471",
//   appId: "1:1086029191471:web:ae5b1fe6743ac3331469da",
//   measurementId: "G-H0RS1XDG8Q",
// };

const firebaseConfig = {
  apiKey: "AIzaSyCFM8-UcOtdynjQCv25tRepM8ddpxyq2jk",
  authDomain: "twitter-clone-1faac.firebaseapp.com",
  databaseURL: "https://twitter-clone-1faac.firebaseio.com",
  projectId: "twitter-clone-1faac",
  storageBucket: "twitter-clone-1faac.appspot.com",
  messagingSenderId: "316208638057",
  appId: "1:316208638057:web:75a37bf24fab32ff145af8",
  measurementId: "G-HGFP2LDXP9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
