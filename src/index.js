import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// context
import { AuthContextProvider } from './context/AuthContext'
// theme 
import { ThemeProvider } from './context/ThemeContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
