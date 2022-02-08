import { useContext } from 'react'
import SettingContext from '../../context/SettingContext'
import ReactSlider from 'react-slider'
import BackButton from './buttons/BackButton'

const Settings = () => {

    const settingsInfo = useContext(SettingContext)

    return (
        <div>
            <label>
                <span>Work minutes {settingsInfo.workMinutes}:00</span>
                <ReactSlider 
                    className='slider'
                    thumbClassName={'thumb'}
                    trackClassName={'track'}
                    value={settingsInfo.workMinutes}
                    onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
                    min={1}
                    max={120}
                />
            </label>
            <label>
                <span>Break minutes {settingsInfo.breakMinutes}:00</span>
                <ReactSlider 
                    className='slider green'
                    thumbClassName={'thumb'}
                    trackClassName={'track'}
                    value={settingsInfo.breakMinutes}
                    onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
                    min={1}
                    max={120}
                />
            </label>
            <div>
                <BackButton onClick={() => settingsInfo.setShowSettings(false)} />
            </div>
        </div>
    )
}
export default Settings