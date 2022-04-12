import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux';
import { store } from './context/store/store';
import './index.css'


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
<Provider store={store}>
<App />
</Provider>

);
