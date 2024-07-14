import '../assets/styles/InputControlado.css';
import { useEffect, useState } from 'react';

function InputControlado() {
  
    const [previsao, setPrevisao] = useState();

  

  return (
    <div className="container">
        <h1>Consigo prever qualquer texto ou palavra instantaneamente!</h1>
        <p>Faça o teste escreva algo no campo secreto abaixo. Consigo prever instantaneamente seus pensamentos e escrever logo abaixo. Quer testar?</p>
        <input
          placeholder="Digite qualquer palavra ou texto"
          type="password"
          className="form-item"
          onChange={(e) => setPrevisao(e.target.value)}
        />
        <span>{previsao}</span>
      
    </div>
  );
}

export default InputControlado;