import { useCollection } from '../../hooks/useCollection'
import TimerList from '../../components/timerlist/TimerList'


const Dashboard = () => {

    const { documents } = useCollection('timers')

    return (
        <div className='p-1'>
            {documents && <TimerList timers={documents} />}
        </div>
    )
}
export default Dashboard