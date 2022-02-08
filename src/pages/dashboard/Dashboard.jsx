import './Dashboard.scss'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'
import TimerList from '../../components/timerlist/TimerList'


const Dashboard = () => {

    const { user } = useAuthContext()
    const { documents } = useCollection('timers')

    return (
        <div>
            {documents && <TimerList timers={documents} />}
        </div>
    )
}
export default Dashboard