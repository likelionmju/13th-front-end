import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import AboutDynamic from "./pages/AboutDynamic";
import Contact from "./pages/Contact";
import Dog from "./pages/Dog";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="about" element={<About />} />
          <Route path="about/:name" element={<AboutDynamic />} />
          <Route path="contact" element={<Contact />} />
          <Route path="dog" element={<Dog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
