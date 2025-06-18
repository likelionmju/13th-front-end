import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import AboutMe from "./pages/AboutMe";
import MoreInfo from "./pages/MoreInfo";
import UserDetail from "./pages/UserDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AboutMe />} />
          <Route path="more" element={<MoreInfo />} />
          <Route path="user/:username" element={<UserDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
