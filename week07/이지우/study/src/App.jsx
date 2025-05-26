import { useState } from "react";
import "./App.css";
import LikeButton from "./components/LikeButton.jsx";
import A from "./components/A.jsx";
import B from "./components/B.jsx";

function App() {
  const [state, setState] = useState(0);
  const [color, setColor] = useState({ color: "red" });
  const [value, setValue] = useState("");

  return (
    <>
      <LikeButton setState={setState} state={state} />
      <A value={value} setValue={setValue} />
      <B value={value} />
    </>
  );
}

export default App;
