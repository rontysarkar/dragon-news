import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader,setLoder] = useState(true)

    // Register 

    const createUser = (email, password) => {
        setLoder(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Login 
    const loginUser = (email, password) => {
        setLoder(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // logOut 

    const logOut = () => {
        setLoder(true)
        return signOut(auth)
    }




    // On Auth State change
    useEffect(() => {
        const unSubscript = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser)
            setLoder(false)
        });
        return () => {
            unSubscript();
        }
    }, [])



    const userInfo = {
        user,
        loader,
        createUser,
        loginUser,
        logOut,
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}
export default AuthProvider;