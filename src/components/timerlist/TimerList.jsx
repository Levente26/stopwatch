import './TimerList.scss'
import { Link } from 'react-router-dom'
import deleteIcon from '../../asserts/delete.png'
import editIcon from '../../asserts/edit.png'
// hook
import { useFirestore } from '../../hooks/useFirestore'

const TimerList = ({ timers }) => {

    const { deleteDocument, updateDocument } = useFirestore('timers')

    const updateTimer = () => {
        
    }

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
                            onClick={updateTimer}
                        />
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