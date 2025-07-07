import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { HooksApp } from './HooksApp'
// import { CounterApp } from './01-useState/CounterApp'
// import {CounterCustomHookApp} from './01-useState/CounterCustomHookApp'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { SimpleFormWithCustomHook } from './02-useEffect/SimpleFormWithCustomHook'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'


import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MultipleCustomHooks />
  </StrictMode>,
)
