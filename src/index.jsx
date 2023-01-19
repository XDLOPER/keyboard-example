import React from 'react';
import { createRoot } from 'react-dom/client';

import {KEYBOARD} from './component/keyboard_script';
import ThemeSetting from './component/theme_setting.jsx';
import './style/main.scss';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
      <ThemeSetting/>
  </React.StrictMode>,
);

const keyboard = new KEYBOARD();
keyboard.keyboardOnClick();