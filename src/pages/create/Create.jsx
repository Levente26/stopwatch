import './Create.scss'
import { useState } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useFirestore } from '../../hooks/useFirestore'


const Create = () => {

    const [name, setName] = useState('')
    const [detail, setDetail] = useState('')
    const [shortBreak, setShortBrake] = useState('')
    const [longBreak, setLongBrake] = useState('')

    const { user } = useAuthContext()
    const { addDocument } = useFirestore('timers')

    const addDoc = () => {
        setName('')
        setDetail('')
        setShortBrake('')
        setLongBrake('')
        const doc = { name, detail, shortBreak, longBreak, user: user.displayName }
        addDocument(doc)
    }

    return (
        <div className='p-1 d-f create-form'>
            <h2 className='font-lg'>Create a new Timer</h2>
            <form className='mt-2'>
                <label>
                    <span>Timer name:</span>
                    <input 
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label>
                    <span>Timer details:</span>
                    <input 
                        type="text"
                        required
                        value={detail}
                        onChange={(e) => setDetail(e.target.value)}
                    />
                </label>
                {/* <label>
                    <span>Short break time:</span>
                    <input 
                        type="number"
                        required
                        value={shortBreak}
                        onChange={(e) => setShortBrake(e.target.value)}
                    />
                </label>
                <label>
                    <span>Long break time:</span>
                    <input 
                        type="number"
                        required
                        value={longBreak}
                        onChange={(e) => setLongBrake(e.target.value)}
                    />
                </label> */}
                <button onClick={addDoc} className='btn font-md mt-2'>Add Timer</button>
            </form>
        </div>
    )
}
export default Create