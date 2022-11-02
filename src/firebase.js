import {initializeApp} from 'firebase/app'
import { getDatabase } from "firebase/database";
import {getAuth} from 'firebase/auth'

import { ref } from 'firebase/database';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional



const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIRE_API_KEY,
    authDomain: process.env.REACT_APP_FIRE_AUTH_DOMAIN,
    databaseURL:process.env.REACT_APP_FIRE_DATABASE_URL,
    projectId:process.env.REACT_APP_FIRE_PROJECT_ID,
    storageBucket:process.env.REACT_APP_FIRE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIRE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIRE_APP_ID,
    measurementId: process.env.REACT_APP_FIRE_MEASUREMENT_ID
  };

// const firebaseConfig = {
//     apiKey: "AIzaSyD74G0-zqw5uNZHhJGKKCtdbrE8Cx4rbns",
//     authDomain: "smartchange-2de49.firebaseapp.com",
//     databaseURL: "https://smartchange-2de49-default-rtdb.firebaseio.com",
//     projectId: "smartchange-2de49",
//     storageBucket: "smartchange-2de49.appspot.com",
//     messagingSenderId: "185763355975",
//     appId: "1:185763355975:web:94f26f3ebb0a3a11310062",
//     measurementId: "G-XNP2HDCW21"
//   };

  //init app
const app= initializeApp(firebaseConfig)
const auth = getAuth(app)
//init db
const db = getDatabase(app)

//collection reference
export const adminRef = (ref(db, 'admins/'))

//get collection
// onSnapshot( (snapshot)=>{
//     let users= []
//     snapshot.docs.forEach((doc)=>{
//         users.push({...doc.data(), id: doc.id})
// })
// })


export{
    auth,
    db,

}