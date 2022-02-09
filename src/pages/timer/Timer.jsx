import './Stopper.scss'
import { useState } from 'react'
import Stopper from './Stopper'
import Settings from './Settings'
// context
import SettingContext from '../../context/SettingContext'

const Timer = () => {

    const [showSettings, setShowSettings] = useState(false) 
    const [workMinutes, setWorkMinutes] = useState(15)
    const [breakMinutes, setBreakMinutes] = useState(20)
    const [longBreakMinutes, setLongBreakMinutes] = useState(45)

    return (
        <main>
            <SettingContext.Provider value={{
                showSettings,
                setShowSettings,
                workMinutes,
                setWorkMinutes,
                breakMinutes,
                setBreakMinutes,
                longBreakMinutes,
                setLongBreakMinutes
            }}>
                {showSettings ? <Settings /> : <Stopper />}
            </SettingContext.Provider>
        </main>
    )
}
export default Timer