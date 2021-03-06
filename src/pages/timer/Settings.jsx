import { useContext } from 'react'
import SettingContext from '../../context/SettingContext'
import ReactSlider from 'react-slider'
import BackButton from './buttons/BackButton'

const Settings = () => {

    const settingsInfo = useContext(SettingContext)

    return (
        <div className='mt-3'>
            <label>
                <span className='font-md ml-1'>Work time {settingsInfo.workMinutes} minutes</span>
                <ReactSlider 
                    className='slider'
                    thumbClassName={'thumb'}
                    trackClassName={'track'}
                    value={settingsInfo.workMinutes}
                    onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
                    min={1}
                    max={60}
                />
            </label>
            <label className='mt-2'>
                <span className='font-md ml-1'>Break time {settingsInfo.breakMinutes} minutes</span>
                <ReactSlider 
                    className='slider'
                    thumbClassName={'thumb'}
                    trackClassName={'track'}
                    value={settingsInfo.breakMinutes}
                    onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
                    min={1}
                    max={60}
                />
            </label>
            <label className='mt-2'>
                <span className='font-md ml-1'>Long break time {settingsInfo.longBreakMinutes} minutes</span>
                <ReactSlider 
                    className='slider'
                    thumbClassName={'thumb'}
                    trackClassName={'track'}
                    value={settingsInfo.longBreakMinutes}
                    onChange={newValue => settingsInfo.setLongBreakMinutes(newValue)}
                    min={5}
                    max={120}
                />
            </label>
            <div className='mt-2'>
                <BackButton onClick={() => settingsInfo.setShowSettings(false)} />
            </div>
        </div>
    )
}
export default Settings