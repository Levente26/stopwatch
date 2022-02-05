import './Navbar.scss'
import { Link } from 'react-router-dom'
import { useLogout } from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext'
import Stopper from '../../asserts/timer.svg'


const Navbar = () => {

    const { logout, isPending } = useLogout()
    const { user } = useAuthContext()

    return (
        <nav>
            <ul className='p-1 d-f'>
                <li className='d-f logo'>
                    <img src={Stopper} alt='stopper' />
                    <p className='font-sm'>Stopwatch</p>
                </li>
                {!user && 
                    <>
                        <li>
                            <Link to='/signup' className='d-f font-md'>Signup</Link>
                        </li>
                        <li>
                            <Link to='/login' className='d-f font-md'>Login</Link>
                        </li>
                    </>
                }
                {user &&
                    <li>
                        {!isPending && <button onClick={logout} className='d-f font-md btn'>Logout</button>}
                        {isPending && <button className='d-f font-md btn'>Logging out...</button>}
                    </li>
                }
            </ul>
        </nav>
    )
}
export default Navbar