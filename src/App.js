import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  
  return (
    <div>
      <div>{count}</div>
      <button onClick={increase}>증가</button>
    </div>
  );
}

export default App;
