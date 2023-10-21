'use client';
import { useContext, createContext, ReactNode, useState, useEffect } from 'react';
import { onAuthStateChanged, getAuth, User} from 'firebase/auth';
import firebase_app from '../utils/config';

const auth = getAuth(firebase_app);

export const AuthContext = createContext<User | null>(null);

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({
    children
}
: {children: ReactNode}) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user: any) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={user}>
            {loading ? <div>Loading...</div> : children}
        </AuthContext.Provider>
    );
};
