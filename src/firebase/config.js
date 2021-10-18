import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCFHuM-dhUN45L2yCWE-Z8L6aWryPk098A',
  authDomain: 'konecta-instagram.firebaseapp.com',
  databaseURL: 'https://konecta-instagram-default-rtdb.firebaseio.com',
  projectId: 'konecta-instagram',
  storageBucket: 'konecta-instagram.appspot.com',
  messagingSenderId: '670817656287',
  measurementId: 'G-HC0D29WZKG',
  appId: '1:670817656287:web:a9bee5a4251033a7a9f86a'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebaseApp.auth();
export const storage = firebaseApp.storage();
export const db = firebaseApp.firestore();
