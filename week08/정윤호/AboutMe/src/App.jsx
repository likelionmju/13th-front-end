import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import About from './components/About.jsx';
import Etc from './components/Etc.jsx';
import Profile from './components/Profile.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
          <Route path="etc" element={<Etc />} />
          <Route path="profile/:name" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}