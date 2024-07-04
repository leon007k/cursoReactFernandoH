import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { CounterApp } from './components/CounterApp';
// import FirstApp from './components/FirstApp';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CounterApp value={100} />
    {/* <FirstApp title="Hola, Soy Goku!!" subtitle="This is a subtitle" /> */}
  </React.StrictMode>
);