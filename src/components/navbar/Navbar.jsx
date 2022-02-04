import './Navbar.scss'
import { Link } from 'react-router-dom'
import { useLogout } from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext'


const Navbar = () => {

    const { logout, isPending } = useLogout()
    const { user } = useAuthContext()

    return (
        <nav>
            <ul>
                <li>
                    <p>image place</p>
                </li>
                {!user && 
                    <>
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                        <li>
                            <Link to='/signup'>Signup</Link>
                        </li>
                    </>
                }
                {user &&
                    <li>
                        {!isPending && <button onClick={logout}>Logout</button>}
                        {isPending && <button>Logging out...</button>}
                    </li>
                }
            </ul>
        </nav>
    )
}
export default Navbar