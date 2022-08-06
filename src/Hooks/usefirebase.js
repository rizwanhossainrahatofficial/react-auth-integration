import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, signInWithPopup,onAuthStateChanged,signOut,GithubAuthProvider  } from "firebase/auth";
import initializeAuthentication from "../Firebase/Firebase.init";


initializeAuthentication()


const useFirebase=()=>{
    const [user,setuser]=useState({})
    const [error,seterror]=useState('')

    const GoogleProvider =new GoogleAuthProvider()
    const githubProvider=new GithubAuthProvider()

    const auth=getAuth()

    const googleSignIn=()=>{
            signInWithPopup(auth,GoogleProvider)
            .then(result=>{
                console.log(result)
                setuser(result.user)
            })
            .catch(error=>{
                seterror(error.message)
            })
    }

const githubSignIn=()=>{
    const auth=getAuth()
    signInWithPopup(auth,githubProvider)
    .then(result=>{
        console.log(result.user)
        setuser(result.user)
    })
}

    const logout=()=>{
        signOut(auth)
        .then(()=>{
            setuser({})
        })
    }

    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            if(user){
                console.log('inside',user)
                setuser(user)
            }
        })
    },[])

    return{
        user,
        error,
        logout,
        googleSignIn,
        githubSignIn
    }
}

export default useFirebase;