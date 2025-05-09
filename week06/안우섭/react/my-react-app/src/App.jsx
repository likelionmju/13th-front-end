// App.jsx
import React, { useState } from "react";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import "./App.css";
const App = () => {
  const [count, setCount] = useState(0);

  const handleChange = (delta) => {
    setCount(count + delta);
  };

  return (
    <div className="app-container">
      <h1>Simple Counter</h1>
      <Viewer count={count} />
      <Controller onChange={handleChange} />
    </div>
  );
};

export default App;
