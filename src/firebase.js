import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAX4jkggIM5cqmIKF6G3pJy3enE95aXtwU",
  authDomain: "fb-clone-1-4cb03.firebaseapp.com",
  projectId: "fb-clone-1-4cb03",
  storageBucket: "fb-clone-1-4cb03.appspot.com",
  messagingSenderId: "386506476394",
  appId: "1:386506476394:web:99c71de8ec3068f29ef313",
  measurementId: "G-273XQHWKBE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
