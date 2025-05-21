import { useState } from 'react'
import './App.css'
import A_Components from './components/A_Components'
import B_Components from './components/B_Components'

function App() {
  const [input_txt, setInput_txt] = useState("");

  const handleChange = (e) => {
    setInput_txt(e.target.value); 
  };

  return (
    <div className="App">
      <A_Components value={input_txt} onChange={handleChange} />
      <B_Components input_txt={input_txt} />
    </div>
  );
}

export default App;