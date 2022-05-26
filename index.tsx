import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app/App';

import './app/styles/index.scss'

import './assets/background.png'

const container = document.querySelector('#root')
const root = ReactDOM.createRoot(container!);

root.render(<App />)
