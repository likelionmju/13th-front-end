import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <App /> // App 컴포넌트를 root 요소에 렌더링
);
