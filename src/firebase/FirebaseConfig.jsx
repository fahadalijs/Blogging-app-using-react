import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage'

//  web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDktnfd4s6QeMbnb8MA3NCUbL1-43qrqqI",
  authDomain: "full-blogging-app.firebaseapp.com",
  projectId: "full-blogging-app",
  storageBucket: "full-blogging-app.appspot.com",
  messagingSenderId: "1007727350326",
  appId: "1:1007727350326:web:5a956019e87dffeb277e97",
  measurementId: "G-Q74SCBMTD0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export {fireDb , auth , storage}