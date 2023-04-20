import firebase from 'firebase/app';

let firebaseConfig = {
    apiKey: "AIzaSyD5ou_PQnH4z68-tP_kjzEORZ9toXJQSzI",
    authDomain: "vueapp-3e4da.firebaseapp.com",
    databaseURL: "https://vueapp-3e4da.firebaseio.com",
    projectId: "vueapp-3e4da",
    storageBucket: "vueapp-3e4da.appspot.com",
    messagingSenderId: "692505579822",
    appId: "1:692505579822:web:7f40a4535bd604ed33aabf",
    measurementId: "G-JC1Q2WJZWZ"
  };

  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  }

  export default firebase;