import './TimerList.scss'
import { Link } from 'react-router-dom'

const TimerList = ({ timers }) => {

    console.log(timers)

    return (
        <div className='timer-list'>
            {timers.map(timer => (
                <Link to={`/timer/${timer.id}`} className='p-1 m-1'>
                    <h4>{timer.name}</h4>
                    <p>{timer.details}</p>
                    <p>Short break time: {timer.shortBreak} minutes</p>
                    <p>Long break time: {timer.longBreak} minutes</p>
                </Link>
            ))}
        </div>
    )
}
export default TimerList