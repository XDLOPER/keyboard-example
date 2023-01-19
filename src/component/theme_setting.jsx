import React,{useState} from 'react';
import App from "./App.jsx";
const ThemeContext = React.createContext();

const ThemeSetting = () => {
    const [theme,setTheme] = useState({

        themeCode:'true',

    });

  // theme dark mode Setting
 /*   const theme_setting = useContext(ThemeContext);
    const body = document.getElementById('body');
    const keyboard = document.getElementById('KEYBOARD');
    
    useEffect(() => {
      switch (theme_setting.themeCode) {
        case 'light':
          body.classList.add(`body_${theme_setting.themeCode}`);
          //button.classList.add(`keyboard_button_${theme_setting.themeCode}`);
          break;
          case 'dark':
            body.classList.add(`body_${theme_setting.themeCode}`);
            console.log(keyboard)
          break;
          case 'system':
            
          break;
        default:
          break;
      }
    }, [theme_setting.themeCode]); */

    return (
        <ThemeContext.Provider value={theme}>
            <App/>
        </ThemeContext.Provider>
    );
}


export {ThemeContext};
export default ThemeSetting;
