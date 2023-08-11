import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
const config = {
    apiKey: "AIzaSyCru3nqpWaT_w1-Qka-NVU5biPCYEM16hA",
    authDomain: "chat-web-app-2a3e4.firebaseapp.com",
    databaseURL: "https://chat-web-app-2a3e4-default-rtdb.firebaseio.com",
    projectId: "chat-web-app-2a3e4",
    storageBucket: "chat-web-app-2a3e4.appspot.com",
    messagingSenderId: "556737306542",
    appId: "1:556737306542:web:339f0d014457d39954323f"
};
const app=firebase.initializeApp(config)
export const auth=app.auth() ;
export const database=app.database();