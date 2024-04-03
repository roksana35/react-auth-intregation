
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from '../firebase.config';

export const AuthContext=createContext(null);

const Authprovider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signUpuser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=>{
        const unSubcribe= onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false)
            console.log('currentUser:',currentUser)
        });
        return ()=>{
            unSubcribe()
        }
    },[])
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }
    const authInfo={user,createUser,signUpuser,logOut,loading}
    return (
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

Authprovider.propTypes={
    children:PropTypes.node
}
export default Authprovider;