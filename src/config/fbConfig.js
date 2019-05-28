import firebase from 'firebase/app'
import 'firebase/firestore';
//import 'firebase/fireauth';

  var firebaseConfig = {
    apiKey: "AIzaSyA2alTjuDZY_3MFH2EkLyGiDb9AEdiBI_w",
    authDomain: "yjangir-marioplan.firebaseapp.com",
    databaseURL: "https://yjangir-marioplan.firebaseio.com",
    projectId: "yjangir-marioplan",
    storageBucket: "yjangir-marioplan.appspot.com",
    messagingSenderId: "974549464691",
    appId: "1:974549464691:web:84077e2e76e249d2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots:true});

  export default firebase;