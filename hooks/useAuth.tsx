
// imports
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    User,
} from 'firebase/auth'

import { useRouter } from 'next/router'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { auth } from '../firebase'

// imports


//this is my custom hook that will be used to authenticate the user
function useAuth() {
    // loading
    const [loading, setLoading] = useState(false)

    // loading

    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();
    // signup function
    const signUp = async (email: string, password: string) => {
        setLoading(true);

        // creating a use with email and password
        //this is a function from firebase that will create a user with email and password
        //it receives auth,email and password as parameters

        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                router.push('/');
                setLoading(false)
            }).catch((err) => {
                alert(err.message);
            }).finally(() => {
                setLoading(false);
            })
    }
    // signup function

    // signin function
    const signIn = async (email: string, password: string) => {
        setLoading(true);
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setLoading(false)
                setUser(userCredential.user);
                router.push('/');
            }).catch((err) => {
                alert(err.message);
            }).finally(() => {
                setLoading(false);
            })
    }
    //signin function

    //logout function

    const logout=async()=>{
        setLoading(true);
        await signOut(auth).then(()=>{
            setLoading(false);
            setUser(null);
            router.push('/');
        }).catch((err)=>{
            alert(err.message);
        }).finally(()=>{
            setLoading(false);
        })   
    }

    //logout function

    return user;
}

export default useAuth