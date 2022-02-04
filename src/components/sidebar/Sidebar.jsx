import './Sidebar.scss'
import { Link } from 'react-router-dom'


const Sidebar = () => {
    return (
        <aside>
            <div>
                <p>username</p>
            </div>
            <ul>
                <li>
                    <Link to='/dashboard'>Dashboard</Link>
                </li>
                <li>
                    <Link to='/create'>New Timer</Link>
                </li>
            </ul>
        </aside>
    )
}
export default Sidebar