import firebase from 'firebase';


const firebaseConfig ={
  apiKey: "AIzaSyBQxIEaFPfcIgKwmNsxIXtjKuMM0U-H5t4",
  authDomain: "netflix-clone-1f1cc.firebaseapp.com",
  projectId: "netflix-clone-1f1cc",
  storageBucket: "netflix-clone-1f1cc.appspot.com",
  messagingSenderId: "1066175431970",
  appId: "1:1066175431970:web:e77d4041b05928bd6b117b"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth=firebase.auth();
  export {auth}