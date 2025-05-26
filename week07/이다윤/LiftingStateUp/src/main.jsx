// React 시작점

import React from "react";
import { createRoot } from "react-dom/client";
// React 18 이상의 새로운 렌더링 방식 사용을 위해 createRoot를 가져옴
import App from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root"));
// HTML의 id가 "root"인 요소에 React 앱을 마운트할 준비를 한다.
root.render(<App />);
// App 컴포넌트를 root에 렌더링하여 React 애플리케이션을 시작한다.
