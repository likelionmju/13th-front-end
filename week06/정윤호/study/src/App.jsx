import LikeButton from './components/LikeButton'
import {useState} from 'react'
function App() {
  const [state, setState] = useState(0)

  return (
    <>
    <LikeButton title="리엑트 마스터 도전" value={state} counter={setState}/>
    </>
  )
}

export default App
