import {initializeApp} from 'firebase/app'
import {getFirestore, collection, getDocs} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDXkFl0T4UdaxIRE2SV6g64wdHO5Jr5CE8",
    authDomain: "smart-change-fbc05.firebaseapp.com",
    projectId: "smart-change-fbc05",
    storageBucket: "smart-change-fbc05.appspot.com",
    messagingSenderId: "1002436391401",
    appId: "1:1002436391401:web:5a0f6c61bba3bc68895b78",
    measurementId: "G-JB1KH4J87Q"
  };

  //init app
const app= initializeApp(firebaseConfig)
const auth = getAuth(app)
//init db
const db = getFirestore(app)

//collection reference

const colref= collection(db, 'users');

//get collection
const get=getDocs(colref).then((snapshot)=>{
    let users= []
    snapshot.docs.forEach((doc)=>{
        users.push({...doc.data(), id: doc.id})
    })
})


export{
    auth,
    db,
    colref,
    
}