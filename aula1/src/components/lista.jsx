import '../assets/styles/Lista.css';
import { useState } from 'react';

function Lista() {
  const [texto, setTexto] = useState('');
  const [lista, setLista] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    if (texto) {
      setLista((listaAnterior) => {
        return [...listaAnterior, texto];
      });
      setTexto('');
    }
  }

  function handleClear() {
    setLista([]);
  }

  return (
    <div className="lista">
      <h1>Músicos e bandas preferidos</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="form"
          type="text"
          name="musicos"
          id="lista-musicos"
          placeholder="Digite uma banda ou músico"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <button className="btn" type="submit">Inserir</button>
        <button className="btn" type="button" onClick={handleClear}>Limpar</button>
      </form>
      <ul>
        {lista.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Lista;