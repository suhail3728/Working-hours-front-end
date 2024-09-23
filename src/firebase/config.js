import { initializeApp } from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import analytics from '@react-native-firebase/analytics';

   // Your web app's Firebase configuration
   const firebaseConfig = {
     apiKey: "AIzaSyA-HVGtBsmkqWVRTwhhu9TSxV_vfbthlc0",
  authDomain: "work-17f4c.firebaseapp.com",
  projectId: "work-17f4c",
  storageBucket: "work-17f4c.appspot.com",
  messagingSenderId: "900670382449",
  appId: "1:900670382449:web:e91cf471073448be8b56d0",
  measurementId: "G-WYYG53QZBQ"
   };

   // Initialize Firebase
   const app = initializeApp(firebaseConfig);
   const analytics = analytics();
   const db = firestore();

   export { db, analytics};