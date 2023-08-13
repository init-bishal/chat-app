import { createContext, useContext, useEffect, useState } from "react";
import { auth, database } from "../misc/firebase";
const ProfileContext=createContext() ;
export const ProfileProvider=({children})=>{
    const [profile,setProfile]=useState(null)
    const [isLoading,setIsLoading]=useState(true)
    useEffect(()=>{
        //allow us to subscribe to currently signed in user inside firebase 
        let userRef ;
        const authUnSub=auth.onAuthStateChanged(authObj=>{
            if(authObj)
            {
                // to put a real time subsscription on data we need to use on
                // whenever our data at this path changes the callback will be fired
                userRef=database.ref(`profile/${authObj.uid}`)
                userRef.on('value',(snap)=>{
                    // it will give us data from the database in form of JS object  
                    const {name,createdAt}=snap.val()
                    const data={
                        name:name, 
                        createdAt:createdAt, 
                        uid:authObj.uid, 
                        email:authObj.email
                    }
                    setProfile(data)
                    setIsLoading(false)
                })
            }
            else
            {
                if(userRef)
                {
                    // to unsubscribe from the database
                    userRef.off()

                }
                setProfile(null)
                setIsLoading(false)
            }
        })
        // return function will run when the components unmounts
        return ()=>{
            authUnSub()
            if(userRef)
            {
                userRef.off()
            }
        }
    },[])
    return <ProfileContext.Provider value={{isLoading,profile}}>
        {children}
    </ProfileContext.Provider>
}
export const useProfile=()=>useContext(ProfileContext)