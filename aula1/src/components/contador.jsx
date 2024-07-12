import React, { useState } from 'react';
import '../assets/styles/Contador.css'

function Contador() {
    const [count, setCount] = useState(0);
  
    const mais = () => {
      setCount(count + 1);
    };
  
    const menos = () => {
      setCount(count - 1);
    };
  
    return (
      <div className="Contador">
        <button className="counter-button" onClick={menos}>-</button>
        <span className="counter-value">{count}</span>
        <button className="counter-button" onClick={mais}>+</button>
      </div>
    );
  }

export default Contador