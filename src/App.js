import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick(arg, event) {
    console.log(arg, event.type); // 5 'click'
    setCount((count) => count + 1);
  }

  return (
    <div className="App">
      <h1>Events in React</h1>
      <p>{count}</p>

      <button onClick={(event) => handleClick(5, event)}>Increment</button>
    </div>
  );
}
