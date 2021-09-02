import firebase from 'firebase';

// add SDK Firebase
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3atabMe_XmR7UlP5PLgt56nmTfXjufHA",
    authDomain: "class-start.firebaseapp.com",
    projectId: "class-start",
    storageBucket: "class-start.appspot.com",
    messagingSenderId: "233275138380",
    appId: "1:233275138380:web:a189d47f50f41feb476fe9"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
export default firebase.database();