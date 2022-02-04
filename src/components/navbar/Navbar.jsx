import './Navbar.scss'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <p>image place</p>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                    <Link to='/signup'>Signup</Link>
                </li>
                <li>
                    <Link to='/logout'>Login</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar