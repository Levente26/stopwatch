import './TimerList.scss'
import { Link } from 'react-router-dom'

const TimerList = ({ timers }) => {

    console.log(timers)

    return (
        <ul>
            {timers.map(timer => (
                <li className='list-item pl-1 m-1'>
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