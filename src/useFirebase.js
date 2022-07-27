import { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, getIdToken } from "firebase/auth";
import { useEffect } from 'react';
import initializeAuthentication from './Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);


    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }
    // observe wheather user auth state changed or not
    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                getIdToken(user)
                    .then(idToken => localStorage.setItem('idToken', idToken))
                setUser(user)
            }
        });
        return unsubcribe;
    })




    return {
        user,
        signInUsingGoogle,
        logOut

    }
}

export default useFirebase;