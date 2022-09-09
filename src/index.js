import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/font/Montserrat/static/Montserrat-Regular.ttf'
import './assets/font/Montserrat/static/Montserrat-ExtraBold.ttf'
import './assets/font/Montserrat/static/Montserrat-Bold.ttf'
import './assets/font/Montserrat/static/Montserrat-SemiBold.ttf'
import './assets/font/Noto_Sans_KR/NotoSansKR-Light.otf'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
