import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Info from "./pages/Info";

function App() {
  return (
    <div className="bg-[#ffedd7] font-['SUITE-Regular']">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;
