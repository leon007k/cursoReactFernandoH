import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import { HooksApp } from './HooksApp'
//import { CounterApp } from './01-useState/CounterApp'
import {CounterCustomHookApp} from './01-useState/CounterCustomHookApp'


import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterCustomHookApp />
  </StrictMode>,
)
