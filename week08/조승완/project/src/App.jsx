import Home from "./pages/Home"
import Abouts from "./pages/About"
import Profile from "./pages/Profile"
import Articles from "./pages/Articles"
import Article from "./pages/Article"
import Layout from "./Layout"
import NotFound from "./pages/NotFound"
import Login from "./pages/Login"
import MyPage from "./pages/Mypage"
import './App.css'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import UserCard from "./pages/Usercard"

function App() {

  return (
    <Routes>
      {/* section */}
      <Route path="/" element={<Layout />}>
        <Route path="/" element = {<Home />} />
        <Route path="/About" element = {<Abouts />} />
        <Route path="/Profile/:username" element = {<Profile />} />
        <Route path="/articles" element={<Articles />}>
          <Route path=":id" element={<Article />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      

      {/* study */}
      <Route path="/UserCard" element = {<UserCard />} />
    </Routes>
    
  )
}

export default App