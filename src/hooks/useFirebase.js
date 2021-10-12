import { useEffect, useState } from "react"
import firebaseInitializeAuthentication from "../components/Firebase/Firebase.initialize"
import { GoogleAuthProvider ,getAuth, signInWithPopup,signOut,onAuthStateChanged  } from "firebase/auth";


firebaseInitializeAuthentication()

const auth= getAuth();
const useFirebase= ()=>{
    const [user , setUser] = useState({});
    const [error, setError] = useState('');
    const auth= getAuth()
    const googleProvider= new GoogleAuthProvider();



    const signInWithGoogle= ()=>{
      return signInWithPopup(auth, googleProvider)
        
    }

    const handleSignOut= ()=>{
        signOut(auth)
        .then(()=>{
            setUser({})
        }).catch(error=>{
            setError(error.massage)
        })
    }

    useEffect(()=>{
        onAuthStateChanged(auth ,user=>{
            if(user){
                setUser(user)
            }
        })
    },[])
  
return {signInWithGoogle,handleSignOut ,user,error }
}
  



export default useFirebase;
   
    


