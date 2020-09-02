import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBxbnO-BHj_wt4oqssTeKzHxdyR7z267n4",
    authDomain: "whatsapp-clone-cdd0d.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-cdd0d.firebaseio.com",
    projectId: "whatsapp-clone-cdd0d",
    storageBucket: "whatsapp-clone-cdd0d.appspot.com",
    messagingSenderId: "982682430021",
    appId: "1:982682430021:web:c4fa7122dfa0e74b10112c",
    measurementId: "G-6HCP04JDHC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);//initialize the app with the firebase config
const db = firebaseApp.firestore();//acces the firestore instance of our firebase config...gets the db
const auth = firebase.auth();//auth handler
const provider = new firebase.auth.GoogleAuthProvider();//needed for google auth

export { auth, provider };
export default db;