// import firebase from 'firebase/compat/app';
import firebase from "firebase/compat/app"
import 'firebase/compat/storage'
import 'firebase/compat/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyACMSLimGxdKrHlhmV1rFoP8xFRr1hrHok",
    authDomain: "firegram-be.firebaseapp.com",
    projectId: "firegram-be",
    storageBucket: "firegram-be.appspot.com",
    messagingSenderId: "904894724375",
    appId: "1:904894724375:web:04a923bf6a21c4f037df52"
};
  
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage()

const projectFirestore = firebase.firestore()

export { projectFirestore, projectStorage }