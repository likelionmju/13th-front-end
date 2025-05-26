import './App.css'
import { useState } from 'react'
import A from './component/A'
import B from './component/B'

function App() {
  const [text, setText] = useState("")

  const onChange = (e) => {
    setText(e.target.value)
  }
  return (
    <>
    <h2>🧪 문제  : 상태 올리기 (Lifting State Up)</h2>
    <A onChange={onChange}/>
    <B value={text}/>
    </>
  )
}

export default App
