import './Sidebar.scss'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext'
import hourGif from '../../asserts/giphy.gif'

const Sidebar = () => {

    const { user } = useAuthContext()
    console.log(user)

    return (
        <aside>
            <div className='user font-lg p-1'>
                {user && <p className='mt-1'>Hey {user.displayName}</p>}
            </div>
            <ul className='ml-1 font-md'>
                <li>
                    <Link to='/' className='p-1 d-f'>My Question</Link>
                </li>
                <li>
                    <Link to='/dashboard' className='p-1 d-f'>Dashboard</Link>
                </li>
                <li>
                    <Link to='/create' className='p-1 d-f'>New Timer</Link>
                </li>
            </ul>
            <img className='gif' src={hourGif} alt='gif' />
        </aside>
    )
}
export default Sidebar