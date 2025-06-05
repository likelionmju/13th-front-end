import { useState } from 'react'
import A from "./components/A"
import B from "./components/B"

function App() {
  const [status, setStatus] = useState("zzzz")

  function changeValue(string) {
    setStatus(string)
  }

  return (
    <>
    <A onChange = {changeValue} value = {status}/>
    <B value = {status}/>
    </>
  )
}

export default App
