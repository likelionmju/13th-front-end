import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div>
      <h1 className="title">Simple Counter</h1>
      <Viewer count={count} />
      <Controller onClickButton={onClickButton} />
    </div>
  );
}

export default App;
