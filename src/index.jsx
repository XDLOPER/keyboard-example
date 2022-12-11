import React from 'react';
import { createRoot } from 'react-dom/client';


import App from './component/App.jsx';
import './style/main.css';
import './style/app.scss';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>,
);