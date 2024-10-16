import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDWyYDKnkY7J_8WLBmIoRh8xEkJfwnBkvQ',
  authDomain: 'cc-scheduler.firebaseapp.com',
  projectId: 'cc-scheduler',
  storageBucket: 'cc-scheduler.appspot.com',
  messagingSenderId: '888309323167',
  appId: '1:888309323167:web:eaacdd227382996125d9aa',
  measurementId: 'G-22QJWVY3CR'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
