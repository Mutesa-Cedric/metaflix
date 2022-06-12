
// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "metaflix-39883.firebaseapp.com",
    projectId: "metaflix-39883",
    storageBucket: "metaflix-39883.appspot.com",
    messagingSenderId: "147994659465",
    appId: "1:147994659465:web:44a5d78d972d7fa40f9458",
    measurementId: "G-SQLQBZVVX5"
}

// console.log(process.env.NEXT_PUBLIC_FIREBASE_API_KEY)
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }