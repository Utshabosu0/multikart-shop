import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;


// Step for Authentication

// intial setup

// 1.firebase create project
// 2.create web app
// 3.get config
// initialize firebase
// enable auth method