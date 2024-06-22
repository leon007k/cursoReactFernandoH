import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { CounterApp } from './components/CounterApp';


const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CounterApp value={0} />
  </React.StrictMode>
);