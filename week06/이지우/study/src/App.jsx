import { useState } from 'react'
import './App.css'
import LikeButton from './components/LikeButton.jsx'

function App() {
  const [state, setState] = useState(0)
  const [color, setColor] = useState({ color: "red" });

  return (
    <>
    <LikeButton setState={setState} state={state} />
    </>
  )
}

export default App
