import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
export const AuthContext = createContext();

const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user,setUser]=useState(null)
    const [loading,setloading]=useState(true)
  const loginGoogle = () => {
    return signInWithPopup(auth, provider);
  };
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signinUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const singOutUser=()=>{
    return signOut(auth)

  } 

 const manageUser=(name,photo)=>{
   return updateProfile(auth.currentUser,{
        displayName:name,photoURL:photo
    })
 }
   
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current user", currentUser);
      if(currentUser){
        setUser(currentUser)
      }
      else{
        setUser(null)
      }
      setloading(false)
      
    });
    return () => {
      unSubscribe();
    };
  }, []);


  const authInfo = {
    loginGoogle,
    createUser,
    signinUser,
    singOutUser,
    manageUser,
    user,
    setUser,
    loading
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
