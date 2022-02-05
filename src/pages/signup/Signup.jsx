import './Signup.scss'
import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'


const Signup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDisplayName] = useState('')
    const { signup, isPending, error } = useSignup()

    const handleSubmit = (e) => {
        e.preventDefault()
        signup(email, password, displayName)
    }

    return (
        <form className='signup m-1 p-1 d-f' onSubmit={handleSubmit}>
            <h2 className='font-lg'>Signup</h2>
            <label>
                <span>Email</span>
                <input 
                    type='email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </label>
            <label>
                <span>Password</span>
                <input 
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </label>
            <label>
                <span>Display Name</span>
                <input 
                    type='text'
                    onChange={(e) => setDisplayName(e.target.value)}
                    value={displayName}
                />
            </label>
            {!isPending && <button className='btn'>Signup</button>}
            {isPending && <button className='btn' disabled >loading</button>}
            {error && <p className='error'>{error}</p>}
        </form>
    )
}
export default Signup