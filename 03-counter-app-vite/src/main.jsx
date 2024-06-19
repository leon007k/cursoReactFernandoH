import React from 'react';
import { createRoot } from 'react-dom/client';
import HelloWorldApp from './HelloWorldApp';
import './style.css';


const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelloWorldApp />
  </React.StrictMode>
);