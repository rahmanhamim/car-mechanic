import {
 getAuth,
 signInWithPopup,
 GoogleAuthProvider,
 signOut,
 onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";

initializeAuthentication();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
 const [user, setUser] = useState({});
 const [isLoading, setIsLoading] = useState(true);

 const signInUsingGoogle = () => {
  setIsLoading(true);
  signInWithPopup(auth, googleProvider)
   .then((result) => {
    setUser(result.user);
   })
   .finally(() => setIsLoading(false));
 };

 const logOut = () => {
  setIsLoading(true);
  signOut(auth)
   .then(() => {})
   .finally(() => setIsLoading(false));
 };

 // observed user state change
 useEffect(() => {
  const unsubscribed = onAuthStateChanged(auth, (user) => {
   if (user) {
    setUser(user);
   } else {
    setUser({});
   }
   setIsLoading(false);
  });
  return () => unsubscribed;
 }, []);

 return {
  user,
  isLoading,
  signInUsingGoogle,
  logOut,
 };
};

export default useFirebase;
