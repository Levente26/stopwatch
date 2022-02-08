import './Stopper.scss'
// stopper
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// buttons
import StartButton from './buttons/StartButton';
import StopButton from './buttons/StopButton';
import SettingsButton from './buttons/SettingsButton';
// context & hooks
import { useContext, useState, useEffect, useRef } from 'react';
import SettingContext from '../../context/SettingContext';

const red = '#f54e4e';
const green = '#4aec8c';

const Stopper = ( ) => {

    const settingsInfo = useContext(SettingContext)

    const [isPaused, setIsPaused] = useState(true)
    const [secondsLeft, setSecondsLeft] = useState(0)
    const [mode, setMode] = useState(null) 
    
    const secondsLeftRef = useRef(secondsLeft)
    const modeRef = useRef(mode)
    const isPausedRef = useRef(isPaused)

    const tick = () => {
        secondsLeftRef.current = secondsLeftRef.current - 1
        setSecondsLeft(secondsLeftRef.current)
    }

    useEffect(() => {

        const switchMode = () => {
            const nextMode = modeRef.current === null ? 'work' : 'break'
            const nextSeconds = (nextMode === 'work' ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60
            
            setMode(nextMode)
            modeRef.current = nextMode
    
            setSecondsLeft(nextSeconds)
            secondsLeftRef.current = nextSeconds
        }

        const interval = setInterval(() => {

            if(isPausedRef.current){
                return
            }  

            if(secondsLeftRef.current === 0){
                return switchMode()
            } 

            tick()
        }, 1000)

        return () => clearInterval(interval)

    }, [settingsInfo])

    const total = mode === 'work' ? settingsInfo.workMinutes * 60 : settingsInfo.breakMinutes * 60

    const percentage = Math.round(secondsLeft / total * 100)
    const minutes = Math.floor(secondsLeft / 60)
    let seconds = secondsLeft % 60 
    if(seconds < 10) seconds = '0' + seconds

    return (
        <div>
            <CircularProgressbar 
                className='progressbar mt-2'
                value={percentage} 
                text={minutes + ':' + seconds} 
                styles={buildStyles({
                    textColor: 'black',
                    pathColor: mode === 'work' ? red : green,
                    trailColor: 'rgba(255,255,255,.2)',
                })}
            />
            <div>
                {isPaused ? 
                    <StartButton onClick={() => {setIsPaused(false); isPausedRef.current = false}} /> 
                    : 
                    <StopButton onClick={() => {setIsPaused(true); isPausedRef.current = true}} />}
            </div>
            <div>
                <SettingsButton onClick={() => settingsInfo.setShowSettings(true)} />
            </div>
        </div>
    )
}
export default Stopper