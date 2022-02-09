import { createContext, useReducer } from "react"

export const ThemeContext = createContext()

const themeReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_THEME': 
            return { ...state, theme: action.payload }
        default: 
            return state
    }
}

export const ThemeProvider = ( { children } ) => {

    const [state, dispatch] = useReducer(themeReducer, {
        theme: 'light'
    })
    const changeTheme = (theme) => {
        dispatch({ type: 'CHANGE_THEME', payload: theme })
    }

    return (
        <ThemeContext.Provider value={{ ...state, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}