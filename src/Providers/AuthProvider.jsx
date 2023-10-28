import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const  AuthContext = createContext(null)
const auth = getAuth(app)


const AuthProvider = ( {children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password)=> {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log('current user', currentUser);
            setLoading(false)
        })

        return () => {
            unSubscribe();
        }
    }, [])

    const userAuthInfo = {
            user,
            loading,
            createUser,
            signIn,
    }

    return (
        <AuthContext.Provider value={userAuthInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;