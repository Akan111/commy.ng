import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD1G5G--_XJ-uP4ayS7zCmgLG8lcg9yKAs",
  authDomain: "commy-ng-e5001.firebaseapp.com",
  databaseURL: "https://commy-ng-e5001.firebaseio.com",
  projectId: "commy-ng-e5001",
  storageBucket: "commy-ng-e5001.appspot.com",
  messagingSenderId: "567659595253",
  appId: "1:567659595253:web:fc58815771ff69d894ccbc"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };