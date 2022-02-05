import './Navbar.scss'
import { Link } from 'react-router-dom'
import { useLogout } from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext'


const Navbar = () => {

    const { logout, isPending } = useLogout()
    const { user } = useAuthContext()

    return (
        <nav>
            <ul className='p-1 d-f'>
                <li>
                    <p>image place</p>
                </li>
                {!user && 
                    <>
                        <li>
                            <Link to='/login' className='d-f font-md'>Login</Link>
                        </li>
                        <li>
                            <Link to='/signup' className='d-f font-md'>Signup</Link>
                        </li>
                    </>
                }
                {user &&
                    <li>
                        {!isPending && <button onClick={logout} className='d-f font-md'>Logout</button>}
                        {isPending && <button className='d-f font-md'>Logging out...</button>}
                    </li>
                }
            </ul>
        </nav>
    )
}
export default Navbar