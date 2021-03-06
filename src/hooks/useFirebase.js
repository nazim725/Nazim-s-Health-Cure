import { useEffect, useState } from "react"
import { GoogleAuthProvider, getAuth, signInWithPopup,onAuthStateChanged,signOut,sendEmailVerification     } from "firebase/auth";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,sendPasswordResetEmail } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication()






const useFirebase=()=>{
    const [user,setUser]=useState({})
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState('')
    const [isLoading,setIsLoading]=useState(true)
    const auth = getAuth();


    const handleRegistration=e=>{
        e.preventDefault();
        if(password.length<6){
          setError('Password should be at least 6 Characters')
          return
        }
    
         createNewUser(email,password)
       
      }


      const createNewUser=(emai,password)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
          const user=result.user
          console.log(user)
          setError('')
          verifyEmail()
        })
        .catch(error=>{
          setError(error.message)
        })
      }


      const handleLogin=e=>{
        e.preventDefault();
        if(password.length<6){
          setError('Password should be at least 6 Characters')
          return
        }
    
        processLogin(email,password)
       
      }


      const processLogin=(email,password)=>{
        signInWithEmailAndPassword(auth, email, password)
        .then(result=>{
          const user=result.user;
          console.log(user)
          setError('')
        })
        .catch(error=>{
          setError(error.message)
        })
    
      }

      useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (user) => {
            if (user) {
             
              setUser(user)
              
            } else {
              setUser({})
            }
            setIsLoading(false)
          });
          return ()=> unsubscribe;

      },[])





      const handleEmailChange=e=>{
        setEmail(e.target.value)
       }
     
     
       const handlePasswordChange=e=>{
         setPassword(e.target.value)
       }

       const signInUsingGoogle=()=>{
        const googleProvider = new GoogleAuthProvider();
        setIsLoading(true)
      return  signInWithPopup(auth,googleProvider)
        
    }


       const logout=()=>{
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
          })
          .catch((error) => {
            setError(error.message)
          })
        .finally(()=>setIsLoading(false))
       }

       const verifyEmail=()=>{
        sendEmailVerification(auth.currentUser)
        .then(() => {
          // Email verification sent!
          // ...
        });
       }


       const resetPassword=()=>{
        const auth = getAuth();
        sendPasswordResetEmail(auth, email)
          .then(() => {
            // Password reset email sent!
            // ..
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
       }



     
    



    return {
        user,setUser,setError,error,isLoading,handleRegistration,handleEmailChange,handlePasswordChange,handleLogin,logout,signInUsingGoogle,resetPassword
    }
}

export default useFirebase