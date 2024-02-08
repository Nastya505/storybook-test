import React from 'react'
import { ThemeContext, lightTheme, darkTheme } from './themeContext'

const ThemeContextProvider = (props) => {
    const [theme, setTheme] = React.useState("darkTheme");
    const onThemeChange = (event) => {
        setTheme(event.target.value);
    }
  return (
    <>
        <select onChange={onThemeChange}>
            <option value={darkTheme}>Dark</option>
            <option value={lightTheme}>Light</option>
        </select>
        <ThemeContext.Provider  value={theme} {...props} />
    </>
  )
}

export default ThemeContextProvider;