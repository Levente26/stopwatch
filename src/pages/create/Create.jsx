import './Create.scss'
import { useState } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useFirestore } from '../../hooks/useFirestore'

const Create = () => {

    const [name, setName] = useState('')
    const [detail, setDetail] = useState('')

    const { user } = useAuthContext()
    const { addDocument } = useFirestore('timers')

    const addDoc = (e) => {
        e.preventDefault()
        setName('')
        setDetail('')
        const doc = { name, detail, user: user.displayName, createdBy: user.uid }
        addDocument(doc)
    }

    return (
        <div className={`d-f create-form`}>
            <h2 className='font-lg mt-1'>Create a new Timer</h2>
            <form onSubmit={addDoc}>
                <label>
                    <span>Timer name:</span>
                    <input 
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label>
                    <span>Timer details:</span>
                    <input 
                        type="text"
                        value={detail}
                        onChange={(e) => setDetail(e.target.value)}
                    />
                </label>
                <button className='btn font-md mt-2'>Add Timer</button>
            </form>
        </div>
    )
}
export default Create