import './ThemeSelector.scss'
import { useTheme } from '../../hooks/useTheme'
import ModeSwitch from '../../asserts/mode-switch.svg'

const ThemeSelector = () => {

    const {changeTheme, theme } = useTheme()
    
    const toggleMode = () => {
        changeTheme(theme === 'dark' ? 'light' : 'dark')
    } 

    return (
        <div className={`${theme} theme-selector display-f pt-1`}>
            <div className='theme-toggle'>
                <img 
                    src={ModeSwitch}
                    alt='light/dark toggle icon'
                    onClick={toggleMode}
                    style={{ filter: theme === 'dark' ? 'invert(100%)' : 'invert(20%)'}}
                />
            </div>
        </div>
    )
}
export default ThemeSelector