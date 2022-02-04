import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAfkfb4vizFwxyZREJHYfgZWOCKREcU5uY",
    authDomain: "stopwatch-fe69a.firebaseapp.com",
    projectId: "stopwatch-fe69a",
    storageBucket: "stopwatch-fe69a.appspot.com",
    messagingSenderId: "823799034408",
    appId: "1:823799034408:web:8c9a2dcf3932e898f33b1d"
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }