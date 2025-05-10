import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Controller from './components/Controller.jsx'
import Viewer from './components/Viewer.jsx'

function App() {
  
  const [state,setState] = useState(0)
  return (
    <>
      <Header/>
      <Viewer state={state}/>
      <Controller setState={setState} state={state}/>
    </>
  )
}

export default App
