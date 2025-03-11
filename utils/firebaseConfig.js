// src/utils/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: 'AIzaSyCISjHyJACVMU2Pq2hOQdO3PppdAU7Ka_Q',
  authDomain: 'YOUR_PROJECT.firebaseapp.com',
  projectId: 'pilly-e02f0',
  storageBucket: 'YOUR_PROJECT.appspot.com',
  messagingSenderId: 'YOUR_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

// ✅ Firebase 앱 초기화
const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export { firebaseApp, messaging };
