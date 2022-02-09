import './TimerList.scss'
import { Link } from 'react-router-dom'

const TimerList = ({ timers }) => {
    return (
        <ul>
            {timers.map(timer => (
                <li key={timer.id} className='list-item'>
                    <Link key={timer.id} to={`/timer/${timer.id}`} className='p-1 m-1 link'>
                        <h4 className='font-lg'>{timer.name}</h4>         
                        <p>{timer.detail}</p>           
                    </Link>
                </li>
            ))}
        </ul>
    )
}
export default TimerList