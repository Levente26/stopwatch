import { useCollection } from '../../hooks/useCollection'
import TimerList from '../../components/timerlist/TimerList'
import { useAuthContext } from '../../hooks/useAuthContext'


const Dashboard = () => {

    const { user } = useAuthContext()
    const { documents } = useCollection('timers')

    let docs = []
    
    if(documents){
        docs = documents.filter(document => document.createdBy === user.uid)
    }

    return (
        <div className='p-1'>
            {documents && <TimerList timers={docs} />}
        </div>
    )
}
export default Dashboard