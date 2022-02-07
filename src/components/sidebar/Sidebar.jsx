import './Sidebar.scss'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext'


const Sidebar = () => {

    const { user } = useAuthContext()
    console.log(user)

    return (
        <aside className=''>
            <div className='user font-lg p-1'>
                {user && <p className='mt-1'>Hey {user.displayName}</p>}
            </div>
            <ul className='mt-4 ml-1 font-md'>
                <li className='mt-2'>
                    <Link to='/' className='p-1 d-f'>My Question</Link>
                </li><li className='mt-2'>
                    <Link to='/dashboard' className='p-1 d-f'>Dashboard</Link>
                </li>
                <li className='mt-2'>
                    <Link to='/create' className='p-1 d-f'>New Timer</Link>
                </li>
            </ul>
        </aside>
    )
}
export default Sidebar