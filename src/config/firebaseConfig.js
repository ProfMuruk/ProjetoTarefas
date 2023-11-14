import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyCB_bs1UiRrRE1Il7igGfkDBujPU3H7_gM",
    authDomain: "tarefas-teste-d8bcb.firebaseapp.com",
    projectId: "tarefas-teste-d8bcb",
    storageBucket: "tarefas-teste-d8bcb.appspot.com",
    messagingSenderId: "424388249665",
    appId: "1:424388249665:web:eb0840ceb56299b3ecdec0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

// Initialize Auth with AsyncStorage
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export {database, auth};
