import UserCard from './components/UserCard';
import './App.css';
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserCard />} />
    </Routes>
  )
}

export default App