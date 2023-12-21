import { createContext, useEffect, useState } from "react";

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState("");

  // crate user
  const signIn = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // google login
  const googleLogin = ()=> {
    const googleProvider = new GoogleAuthProvider()
    return signInWithPopup(auth,googleProvider)
  }

  //   login user
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   logout
  const logout = () => {
    return signOut(auth);
  };

  // update profile
  const update = (name, image) => {
    setLoading(true);
    return updateProfile(auth.currentUser,{
      displayName: name,
      photoURL: image,
    });
  };

  //   overbar
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    loading,
    user,
    signIn,
    login,
    logout,
    update,
    googleLogin,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
