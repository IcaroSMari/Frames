import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Jokenpo from "./componentes/joken";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Jokenpo />
    </>
  );
}

export default App;
