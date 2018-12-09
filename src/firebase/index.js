import firebase from 'firebase/app';
import { firestoreDBConfig } from './config.js';

// export const firebaseApp = firebase.initializeApp(firebaseConfig);
// export const firebaseDB = firebaseApp.database();

firebase.initializeApp(firestoreDBConfig);
export const firestore = firebase.firestore();
