import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { HooksApp } from './HooksApp'
// import { CounterApp } from './01-useState/CounterApp'
// import {CounterCustomHookApp} from './01-useState/CounterCustomHookApp'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { SimpleFormWithCustomHook } from './02-useEffect/SimpleFormWithCustomHook'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
//import {FocusScreen} from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayaoutEffect/Layout'
// import { Memorize } from './06-memos/Memorize'
// import {MemoHook} from './06-memos/MemoHook'
// import { CallBackHook } from './06-memos/CallBackHook'
import { Padre } from './07-tarea-memo/Padre'


import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Padre />
  </StrictMode>,
)
