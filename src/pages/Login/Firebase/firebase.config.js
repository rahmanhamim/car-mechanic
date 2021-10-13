console.log(process.env);
const firebaseConfig = {
 apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
 authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
 projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
 storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
 messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
 appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// const firebaseConfig = {
//  apiKey: "AIzaSyCrFpiU8pWtCD3dVjyI23Jso8JaCjWtCC0",
//  authDomain: "car-mechanic-rh.firebaseapp.com",
//  projectId: "car-mechanic-rh",
//  storageBucket: "car-mechanic-rh.appspot.com",
//  messagingSenderId: "712249394516",
//  appId: "1:712249394516:web:43348ef0c104d8871974c1",
// };

export default firebaseConfig;
