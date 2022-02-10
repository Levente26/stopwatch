import './Stopper.scss'
// stopper
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// buttons
import StartButton from './buttons/StartButton';
import StopButton from './buttons/StopButton';
import SettingsButton from './buttons/SettingsButton';
// component
import StopperHeader from './StopperHeader';
// context & hooks
import { useContext, useState, useEffect, useRef } from 'react';
import SettingContext from '../../context/SettingContext';
import { useTheme } from '../../hooks/useTheme'
import { useParams } from 'react-router-dom';
import { useDocument } from '../../hooks/useDocument'
// sound effect
import useSound from 'use-sound'
import Voice from '../../voice/voice.wav'

const red = '#b91818';
const green = '#27c72f';
const yellow = '#e2e20b';
const purple = '#b935b9'

const Stopper = () => {

    const settingsInfo = useContext(SettingContext)
    const { theme } = useTheme()

    const { id } = useParams()
    const { document } = useDocument('timers', id)

    const [isPaused, setIsPaused] = useState(true)
    const [isStarted, setIsStarted] = useState(false)
    const [secondsLeft, setSecondsLeft] = useState(0)
    const [mode, setMode] = useState(null) 
    const [isBreak, setIsBreak] = useState(false)
    let [breakCounter, setBreakCounter] = useState(0)

    const secondsLeftRef = useRef(secondsLeft)
    const modeRef = useRef(mode)
    const isPausedRef = useRef(isPaused)
    const breakCounterRef = useRef(breakCounter)
    const isStartedRef = useRef(isStarted)

    const tick = () => {
        secondsLeftRef.current = secondsLeftRef.current - 1
        setSecondsLeft(secondsLeftRef.current)
    }
  
    const [radioCheck] = useSound(Voice, {volume: 0.7})

    useEffect(() => {
        const switchMode = () => {
            let nextMode;
            if(isStartedRef.current === true){
                if(modeRef.current === null) nextMode = 'work'
                else if(modeRef.current === 'work' && breakCounterRef.current < 3) nextMode = 'break'
                else if(breakCounterRef.current === 3){
                    nextMode = 'longbreak'
                    breakCounterRef.current = 0
                    isStartedRef.current = false
                    setIsBreak(true)
                }
                else nextMode = 'work'
            }

            let nextSeconds;
            if(nextMode === 'work') nextSeconds = settingsInfo.workMinutes * 60
            else if(nextMode === 'break') nextSeconds = settingsInfo.breakMinutes * 60
            else if(nextMode === 'longbreak') nextSeconds = settingsInfo.longBreakMinutes * 60

            setMode(nextMode)
            setBreakCounter(breakCounterRef.current)
            modeRef.current = nextMode
            setSecondsLeft(nextSeconds)
            secondsLeftRef.current = nextSeconds
            setIsStarted(isStartedRef.current)

            if(modeRef.current === 'work'){
                breakCounterRef.current = breakCounterRef.current + 1
            }
        }

        const interval = setInterval(() => {
            if(isPausedRef.current){
                return
            }  
            if(secondsLeftRef.current === 0){
                if(mode === 'work' || mode === 'break'){
                    radioCheck()
                }
                switchMode()
            }
            tick()
        }, 1000)

        return () => clearInterval(interval)

    }, [settingsInfo, mode])

    let total;
    if(mode === 'work') total = settingsInfo.workMinutes * 60
    else if(mode === 'break') total = settingsInfo.breakMinutes * 60
    else total = settingsInfo.longBreakMinutes * 60

    const percentage = Math.round(secondsLeft / total * 100)
    const minutes = Math.floor(secondsLeft / 60)
    let seconds = secondsLeft % 60 
    if(seconds < 10) seconds = '0' + seconds

    return (
        <div>
            <StopperHeader
                mode={mode}
                isStarted={isStarted}
                isPaused={isPaused}
                isBreak={isBreak}
                doc={document}
            />
            <CircularProgressbar 
                className='progressbar mt-1'
                value={percentage} 
                text={!isBreak ? minutes + ':' + seconds : 'Break'}
                styles={buildStyles({
                    textColor: theme === 'dark' ? 'white' : 'black',
                    pathColor: 
                        mode === 'work' && !isPaused ? green 
                        : mode === 'work' && isPaused ? yellow 
                        : isBreak ? purple 
                        : red,
                    trailColor: '#acacacb1',
                })}
            />
            <div className='d-f p-1 btns'>
                {isPaused ? 
                    <>
                        <StartButton onClick={() => {
                            setIsStarted(true)
                            isStartedRef.current = true 
                            setIsPaused(false)
                            isPausedRef.current = false
                        }} 
                        /> 
                        <SettingsButton onClick={() => settingsInfo.setShowSettings(true)} />
                    </>
                    : 
                    mode === 'work' && 
                        <StopButton onClick={() => {
                            setIsPaused(true) 
                            isPausedRef.current = true}} 
                        />
                    }
            </div>
        </div>
    )
}
export default Stopper