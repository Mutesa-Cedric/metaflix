
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


//this is my custom hook that will be used to authenticate the user
function useAuth() {
    const [user, setuser] = useState();

    return user;
}

export default useAuth