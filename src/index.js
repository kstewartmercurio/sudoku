import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import "./styling/boardPage/boardPage.css";
import "./styling/boardPage/navbar.css";
import "./styling/boardPage/topBtnBar.css";
import "./styling/boardPage/board.css";
import "./styling/boardPage/numBtnBar.css";
import "./styling/boardPage/bottomBtnBar.css";
import "./styling/welcome.css";
import "./styling/settings.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);