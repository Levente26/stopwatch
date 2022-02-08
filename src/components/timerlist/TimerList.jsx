import './TimerList.scss'
import { Link } from 'react-router-dom'

const TimerList = ({ timers }) => {

    console.log(timers)

    return (
        <div className='timer-list'>
            {timers.map(timer => (
                <Link key={timer.id} to={`/timer/${timer.id}`} className='p-1 m-1'>
                    <h4>{timer.name}</h4>                    
                </Link>
            ))}
        </div>
    )
}
export default TimerList