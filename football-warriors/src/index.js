import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CountDownTimer from './CountDownTimer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CountDownTimer />, document.getElementById('root'));
registerServiceWorker();
