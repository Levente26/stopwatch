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
import { useParams } from 'react-router-dom';
import { useDocument } from '../../hooks/useDocument'
import { useTheme } from '../../hooks/useTheme'
// pictures
import work from '../../asserts/work.png'
import winkingFace from '../../asserts/winking-face.png'
// sound effect
import useSound from 'use-sound'
import Voice from '../../voice/voice.wav'

const red = '#b91818';
const green = '#27c72f';
const yellow = '#e2e20b';

const Stopper = () => {

    const settingsInfo = useContext(SettingContext)
    const { id } = useParams()
    const { document } = useDocument('timers', id)
    const { theme } = useTheme()

    const [isPaused, setIsPaused] = useState(true)
    const [isStarted, setIsStarted] = useState(false)
    const [secondsLeft, setSecondsLeft] = useState(0)
    const [mode, setMode] = useState(null) 
    
    const secondsLeftRef = useRef(secondsLeft)
    const modeRef = useRef(mode)
    const isPausedRef = useRef(isPaused)

    const tick = () => {
        secondsLeftRef.current = secondsLeftRef.current - 1
        setSecondsLeft(secondsLeftRef.current)
    }

    
    const [radioCheck] = useSound(Voice, {volume: 0.7})
    useEffect(() => {

        const switchMode = () => {
            const nextMode = modeRef.current === null ? 'work' : modeRef.current === 'work' ? 'break' : 'work'
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
                if(mode === 'work'){
                    radioCheck()
                }
                switchMode()
            }
            tick()
        }, 1000)

        return () => clearInterval(interval)

    }, [settingsInfo, mode])

    const total = mode === 'work' ? settingsInfo.workMinutes * 60 : settingsInfo.breakMinutes * 60

    const percentage = Math.round(secondsLeft / total * 100)
    const minutes = Math.floor(secondsLeft / 60)
    let seconds = secondsLeft % 60 
    if(seconds < 10) seconds = '0' + seconds

    return (
        <div>
            {document && <div className='header'>
                {mode === 'work' && isStarted && !isPaused ?
                    <>
                        <div className='d-f mode mb-1'>
                            <img className='img mr-1' src={work} alt='gear' />
                            <h3>{document.name} is currently in progress</h3>
                            <img className='img ml-1' src={work} alt='gear' />
                        </div>
                        <p>{document.detail} </p>
                    </>
                    : isPaused && isStarted ? 
                    <>
                        <div className='d-f mode mb-1'>
                            <h3>{document.name} is paused</h3>
                        </div>
                        <p>{document.detail} </p>
                    </>
                    : 
                    <>
                        <div className='d-f mode mb-1'>
                            <h3>{document.name}</h3>
                        </div>
                        <p>{document.detail} </p>
                    </>
                }
                {mode === 'break' && 
                    <div className='d-f mode mt-1'>
                        <h3>Time is up, take a break</h3>
                        <img className='img ml-1' src={winkingFace} alt='winking face' />
                    </div>
                }
            </div>}
            <CircularProgressbar 
                className='progressbar mt-1'
                value={percentage} 
                text={minutes + ':' + seconds} 
                styles={buildStyles({
                    textColor: theme === 'dark' ? 'white' : 'black',
                    pathColor: mode === 'work' && !isPaused ? green : mode === 'work' && isPaused ? yellow : red,
                    trailColor: '#acacacb1',
                })}
            />
            <div className='d-f p-1 btns'>
                {isPaused ? 
                    <>
                        <StartButton onClick={() => {setIsStarted(true); setIsPaused(false); isPausedRef.current = false}} /> 
                        <SettingsButton onClick={() => settingsInfo.setShowSettings(true)} />
                    </>
                    : 
                    mode === 'work' && <StopButton onClick={() => {setIsPaused(true); isPausedRef.current = true}} />}
            </div>
        </div>
    )
}
export default Stopper