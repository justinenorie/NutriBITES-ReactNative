// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDwg77PiNC28K9lJdf3of1VM_GCGHJTttU",
    authDomain: "practice-auth-e69ba.firebaseapp.com",
    projectId: "practice-auth-e69ba",
    storageBucket: "practice-auth-e69ba.firebasestorage.app",
    messagingSenderId: "362912182524",
    appId: "1:362912182524:web:ca17853f3a264f41b3a779",
    measurementId: "G-W4W37FRH0R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { app, auth };