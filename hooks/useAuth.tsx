
// imports
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    User,
} from 'firebase/auth'
import { useRouter } from 'next/router'
import { Children, createContext, useContext, useEffect, useMemo, useState } from 'react'
import { auth } from '../firebase'

interface IAuth {
    user: User | null
    signUp: (email: string, password: string) => Promise<void>
    signIn: (email: string, password: string) => Promise<void>
    logout: () => Promise<void>
    error: string | null
    loading: boolean
}


// imports

const AuthContext = createContext<IAuth>({
    user: null,
    signUp: async () => { },
    signIn: async () => { },
    logout: async () => { },
    error: null,
    loading: false
})
interface AuthProviderProps {
    children: React.ReactNode
}

//this is my custom hook that will be used to authenticate the user
export function AuthProvider({ children }: AuthProviderProps) {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [initialLoading, setInitialLoading] = useState(true);

    // User is authenticated
    useEffect(
        () =>
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    // Logged in...
                    setUser(user)
                    setLoading(false)
                } else if (localStorage.getItem("signedUp")) {
                    // Not logged in...
                    router.push('/login')
                    setUser(null)
                    setTimeout(() => {
                        setLoading(false)
                    }, 500)
                }
                else {
                    router.push("/welcome")
                    setUser(null)
                    setTimeout(() => {
                        setLoading(false)
                    }, 500)
                }
                setInitialLoading(false)
            }),
        [auth]
    )
    // User is authenticated


    const router = useRouter();
    // signup function
    const signUp = async (email: string, password: string) => {
        setLoading(true);

        // creating a use with email and password
        //this is a function from firebase that will create a user with email and password
        //it receives auth,email and password as parameters

        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                localStorage.setItem("signedUp", `${Math.random() * 1000000}`);
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
                localStorage.setItem("signedUp", `${Math.random() * 1000000}`);
                setUser(userCredential.user);
                router.push('/');
                setLoading(false)

            }).catch((err) => {
                alert(err.message);
            }).finally(() => {
                setLoading(false);
            })
    }
    //signin function

    //logout function

    const logout = async () => {
        setLoading(true);
        await signOut(auth).then(() => {
            // setLoading(false);
            setUser(null);
            router.push('/login');
        }).catch((err) => {
            alert(err.message);
        }).finally(() => {
            setLoading(false);
        })
    }

    //logout function

    //useMemo to increase performance
    const memoedValue = useMemo(() => ({
        user, signUp, signIn, loading, logout, error
    }), [user, loading, error])
    //useMemo to increase performance

    //returning context to share info accross page
    return (<AuthContext.Provider value={memoedValue}>
        {children}
    </AuthContext.Provider>);
    //returning context to share info accross page

}

export default function useAuth() {
    return useContext(AuthContext);
}

