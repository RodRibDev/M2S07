import '../assets/styles/Form.css';
import { useEffect, useState } from 'react';

function Form() {
  const [formdata, setFormdata] = useState({
    nome: '',
    email: '',
    idade: ''
  });

  const [message, setMessage] = useState('* Preencha todos os campos');
  const [messageColor, setMessageColor] = useState('red');

  useEffect(() => {
    const error = Object.values(formdata).reduce((totalizador, item) => {
      if (!item) totalizador += 1;
      return totalizador;
    }, 0);

    if (error > 0) {
      setMessage('* Preencha todos os campos');
      setMessageColor('red');
    } else {
      setMessage('Obrigado por preencher todos os campos do formulário.');
      setMessageColor('green');
    }
  }, [formdata]);

  return (
    <div className="container">
      <h1>Insira seus dados</h1>
      <form className='form'>
        <input
          placeholder="Informe seu nome"
          type="text"
          className="form-item"
          onChange={(e) => setFormdata(prevState => ({...prevState, nome: e.target.value}))}
        />

        <input
          placeholder="Informe seu email"
          type="text"
          className="form-item"
          onChange={(e) => setFormdata(prevState => ({...prevState, email: e.target.value}))}
        />

        <input
          placeholder="Informe sua idade"
          type="text"
          className="form-item"
          onChange={(e) => setFormdata(prevState => ({...prevState, idade: e.target.value}))}
        />
      </form>
      <div className='alert' style={{ color: messageColor }}>{message}</div>
    </div>
  );
}

export default Form;