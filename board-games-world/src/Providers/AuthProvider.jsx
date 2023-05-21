import {
	createUserWithEmailAndPassword,
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from "firebase/auth";
import { useEffect } from "react";
import { createContext, useState } from "react";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const createUser = (
		email,
		password,
		{ displayName: name, photoURL: photo } = {}
	) => {
		setLoading(true);
		const user = { displayName: name };
		if (photo) {
			user.photoURL = photo;
		}
		return createUserWithEmailAndPassword(auth, email, password)
			.then((result) => {
				updateProfile(result.user, user);
				logOut();
				return;
			})
			.finally(() => {
				setLoading(false);
			});
	};

	const signIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const providerGoogle = new GoogleAuthProvider();
	const handleGoogleLogin = () => {
		setLoading(true);
		return signInWithPopup(auth, providerGoogle)
			.then((result) => {
				const loggedInUser = result.user;
				setUser(loggedInUser);
				setLoading(false);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage);
				setLoading(false);
				throw error; // re-throw the error to be caught by the caller
			});
	};

	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
		});
		return () => {
			return unsubscribe();
		};
	}, []);

	const authInfo = {
		user,
		loading,
		createUser,
		signIn,
		logOut,
		handleGoogleLogin,
	};
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
