
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
    const router=useRouter();
    // signup function
    const signup=async (email:string,password:string) => {
        setLoading(true);

        // creating a use with email and password
        //this is a function from firebase that will create a user with email and password
        //it receives auth,email and password as parameters

        await createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            setUser(userCredential.user);
            router.push('/');
            setLoading(false)
        }).catch((err)=>{
            alert(err.message);
        }).finally(()=>{
            setLoading(false);
        })
    }
    // signup function

    return user;
}

export default useAuth