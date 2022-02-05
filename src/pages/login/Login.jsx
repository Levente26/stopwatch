import './Login.scss'
import { useState } from 'react'
import { useLogin }from '../../hooks/useLogin'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, error, isPending } = useLogin()

    const handleSubmit = (e) => {
        e.preventDefault()
        login(email, password)
    }
    
    return (
        <form onSubmit={handleSubmit} className='login m-1 p-1 d-f'>
            <h2 className='font-lg'>Login</h2>
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
            {!isPending && <button className='btn'>Login</button>}
            {isPending && <button className='btn' disabled >loading</button>}
            {error && <p className='error'>{error}</p>}
        </form>
    )
}
export default Login