import './TimerList.scss'
import deleteIcon from '../../asserts/delete.png'
import { Link } from 'react-router-dom'
import { useFirestore } from '../../hooks/useFirestore'

const TimerList = ( { timers } ) => {

    const { deleteDocument } = useFirestore('timers')

    return (
        <ul>
            {timers.map(timer => (
                <li key={timer.id} className='list-item'>
                    <Link key={timer.id} to={`/timer/${timer.id}`} className='p-1 m-1 link'>
                        <h4 className='font-lg'>{timer.name}</h4>
                        <p>{timer.detail}</p>
                    </Link>
                    <div className='icons d-f'>
                        <img 
                            className='icon' 
                            src={deleteIcon} 
                            alt='delete' 
                            onClick={() => deleteDocument(timer.id)}
                        />
                    </div>   
                </li>
            ))}
        </ul>
    )
}
export default TimerList