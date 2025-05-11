import "./App.css";
import { useState } from "react";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";

function App() {
  const [count, setCount] = useState(0);

  const onChange = (num) => {
    setCount((prev) => prev + num);
  };
  //const [light, setLight] = useState("OFF");
  // const buttonProps = {
  //   text: "메일",
  //   color: "red",
  //   a: 1,
  //   b: 2,
  //   c: 3,
  // };
  // return (
  //   <>
  //     {/* <Header />
  //     <Main />
  //     <Footer /> */}
  //     <Button {...buttonProps} />
  //     <Button text={"카페"} />
  //     <Button>
  //       <div>자식요소</div>
  //     </Button>
  //   </>
  // );
  return (
    <>
      {/* <div style={{ textAlign: "center", marginTop: "50px" }}>

      </div> */}
      <div>
        <h1>Simple Counter</h1>
        <section>
          <Viewer count={count} />
        </section>
        <section>
          <Controller onChange={onChange} />
        </section>
      </div>
    </>
  );
}

export default App;
