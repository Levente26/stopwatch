import { useEffect, useState } from "react"
import { projectAuth, projectFirestore } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {

    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch, user } = useAuthContext()

    const logout = async() => {
        setError(null)
        setIsPending(true)

        // sign the user out
        try {
            // update online status
            const { uid } = projectAuth.currentUser
            await projectFirestore.collection('users').doc(uid).update({
                online: false,
            })

            await projectAuth.signOut()

            // dispatch logout action
            dispatch({ type: 'LOGOUT' })

            // update state
            if(!isCancelled){
                setIsPending(false)
                setError(null)
            }
        } catch (error) {
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

    return { logout, error, isPending }
}