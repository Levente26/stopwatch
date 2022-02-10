import './Navbar.scss'
// router
import { Link } from 'react-router-dom'
// picture
import Stopper from '../../asserts/timer.png'
// context & hook
import { useAuthContext } from '../../hooks/useAuthContext'
import { useLogout } from '../../hooks/useLogout'
import { useTheme } from '../../hooks/useTheme'

const Navbar = () => {

    const { user } = useAuthContext()
    const { logout, isPending } = useLogout()
    const { theme } = useTheme()

    return (
        <nav>
            <ul className='d-f'>
                <li className='d-f logo'>
                    <img 
                        src={Stopper} 
                        alt='stopper' 
                        style={{ filter: theme === 'dark' ? 'invert(20%)' : 'invert(100%)'}}
                        className='stopwatch'
                    />
                </li>
                {!user && 
                    <>
                        <li>
                            <Link to='/signup' className='d-f font-md btn'>Signup</Link>
                        </li>
                        <li>
                            <Link to='/login' className='d-f font-md btn'>Login</Link>
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