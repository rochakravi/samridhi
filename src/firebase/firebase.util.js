import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCcGhLdcn8jJsOS4qqZGd3ipiBmz3JCeqE',
  authDomain: 'fast-buy-india.firebaseapp.com',
  databaseURL: 'https://fast-buy-india.firebaseio.com',
  projectId: 'fast-buy-india',
  storageBucket: 'fast-buy-india.appspot.com',
  messagingSenderId: '1027370136770',
  appId: '1:1027370136770:web:126af481f68658f2a3775b',
  measurementId: 'G-1FWN5XFZ1D'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider)
}

export default firebase
