import { useState, useEffect } from "react"
import { projectAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"

export const useSignup = () => {

    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const signup = async(email, password, displayName) => {
        setError(null)
        setIsPending(true)
        try {
            //signup user
            const response = await projectAuth.createUserWithEmailAndPassword(email, password)
            console.log(response.user)
            if(!response) {
                throw new Error('Could not complete signup')
            }
            // add displayName to user
            await response.user.updateProfile({ displayName })
            // dispatch login action
            dispatch({ type:'LOGIN', payload: response.user })
            
            // update state
            if(!isCancelled){
                setIsPending(false)
                setError(null)
            }
        } 
        catch (error) {
            console.log(error.message)
            // update state
            if(!isCancelled){
                setError(error.message)
                setIsPending(false)
            }
        }
    }
     // cleanup function
    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return { signup, error, isPending }
}