import './App.css'

import {useState} from 'react'
import LikeButton from './components/LikeButton'

function App() {
  const [like, setlike] = useState(0)
  const title = "리액트 마스터 도전!"
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100vh" }}>
        <LikeButton title = {title} like = {like} setlike = {setlike}/>
      </div>
    </>
  )
}

export default App
