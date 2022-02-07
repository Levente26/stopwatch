import './Signup.scss'
import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'


const Signup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDisplayName] = useState('')
    const [question, setQuestion] = useState('')
    const { signup, isPending, error } = useSignup()

    const handleSubmit = (e) => {
        e.preventDefault()
        signup(email, password, displayName, question)
    }

    return (
        <form className='signup m-1 p-1 d-f' onSubmit={handleSubmit}>
            <h2 className='font-lg'>Signup</h2>
            <label>
                <span>Email</span>
                <input 
                    type='email'
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </label>
            <label>
                <span>Password</span>
                <input 
                    type='password'
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </label>
            <label>
                <span>Display Name</span>
                <input 
                    type='text'
                    required
                    onChange={(e) => setDisplayName(e.target.value)}
                    value={displayName}
                />
            </label>
            <label>
                <span>Focusing Question</span>
                <input 
                    type='text'
                    required
                    onChange={(e) => setQuestion(e.target.value)}
                    value={question}
                />
            </label>
            {!isPending && <button className='btn'>Signup</button>}
            {isPending && <button className='btn' disabled >Signing up...</button>}
            {error && <p className='error'>{error}</p>}
        </form>
    )
}
export default Signup