import { useEffect, useState } from "react";
import initializeFirebase from "../../pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile } from "firebase/auth";

// initialize the firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const [loading, setLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // Register New User With Email & Pass
    const registerNewUser = (email, pass, name, navigate) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // Send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!

                }).catch((error) => {
                    // An error occurred

                });
                navigate('/');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setLoading(false));
    };

    // Login existing user
    const loginUser = (email, pass, location, navigate) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                setUser(userCredential.user)
                const destination = location?.state?.from || '/';
                navigate(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setLoading(false));
    };

    // Login with Google
    const loginWithGoogle = (location, navigate) => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                const destination = location?.state?.from || '/';
                navigate(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setLoading(false));
    };

    // Observer user State change or not
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unSubscribe;
    }, [])

    // Logout user
    const logout = () => {
        setLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setLoading(false));
    };

    return {
        user,
        loading,
        authError,
        registerNewUser,
        loginUser,
        loginWithGoogle,
        logout,
    };

}

export default useFirebase;