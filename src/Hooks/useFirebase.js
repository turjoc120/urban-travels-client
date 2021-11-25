import { getAuth, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initApp from "../pages/Login/Firebase/firebase.init";

initApp()



const useFirebase = () => {

    const auth = getAuth();

    const [user, setUser] = useState({})
    const [error, setErr] = useState("")
    const [isLoading, setLoading] = useState(true)

    const googleLogin = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setLoading(false)
        });
        return () => unsubscribe()
    }, [])

    const mailPassRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const mailPassLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        signOut(auth).then(() => {

        }).catch((error) => {

        });
    }

    const handelName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            const newUser = { ...user, displayName: name }
            setUser(newUser)

        }).catch((error) => {
            setErr(error.message)
        });

    }

    return {
        handelName,
        mailPassLogin,
        mailPassRegister,
        isLoading,
        setLoading,
        logOut,
        user, setUser,
        error, setErr,
        googleLogin,
    }
};

export default useFirebase;