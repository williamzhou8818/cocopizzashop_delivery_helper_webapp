import firebase from 'firebase/app';
import 'firebase/firestore';


const config = {
    apiKey: "AIzaSyDZ3y0OHZ5fPffpH1v3qhvkINESzmp-ecE",
    authDomain: "cocopizzashop-delivery-helper.firebaseapp.com",
    databaseURL: "https://cocopizzashop-delivery-helper.firebaseio.com",
    projectId: "cocopizzashop-delivery-helper",
    storageBucket: "cocopizzashop-delivery-helper.appspot.com",
    messagingSenderId: "345429249285",
    appId: "1:345429249285:web:96873bee400f4351fefb6c",
    measurementId: "G-6FXBX9K0Y7"
  };

  

  firebase.initializeApp(config);

  export const firestore = firebase.firestore();

  export default firebase;