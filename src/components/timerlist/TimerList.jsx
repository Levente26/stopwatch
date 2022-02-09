import './TimerList.scss'
import { Link } from 'react-router-dom'
import deleteIcon from '../../asserts/delete.png'
import editIcon from '../../asserts/edit.png'

const TimerList = ({ timers }) => {
    return (
        <ul>
            {timers.map(timer => (
                <li key={timer.id} className='list-item'>
                    <Link key={timer.id} to={`/timer/${timer.id}`} className='p-1 m-1 link'>
                        <h4 className='font-lg'>{timer.name}</h4>       
                        <p>{timer.detail}</p>     
                    </Link>
                    <div className='icons d-f p-1'>
                        <img 
                            className='icon' 
                            src={editIcon} 
                            alt='edit' 
                        />
                        <img 
                            className='icon' 
                            src={deleteIcon} 
                            alt='delete' 
                            // onClick={}
                        />
                    </div>   
                </li>
            ))}
        </ul>
    )
}
export default TimerList