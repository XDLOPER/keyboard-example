import React, { useState,useContext,useEffect} from 'react';
import IconGenerate from "./iconGenerate.jsx";
import { KEYBOARD } from "../component/keyboard_script";
import { ThemeContext } from './theme_setting.jsx';

const Button = (props) => {
    // private
    const themeSetting = useContext(ThemeContext);
    console.log(themeSetting)
    const keyboard = new KEYBOARD();
    const { property } = props;
    const key = property.key;


    //return
    return (
        <button data-theme-code={themeSetting.themeCode} id={key} onClick={(e)=>{keyboard.buttonOnClick(e,key)}} className='keyboard_button'>
            {property.buttonIcon ? <IconGenerate title={property.buttonIcon}/> : property.buttonName }
        </button>
    );
}

export default Button;
