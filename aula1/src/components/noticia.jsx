import React, { useEffect, useState } from 'react';
import '../assets/styles/Noticia.css'

function Noticia() {
  const [noticiaFetch, setNoticiaFetch] = useState('');

  async function pegarNoticia() {
    const resposta = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release');
    const noticia = await resposta.json();
    const noticiaTitulo = noticia.items[0].titulo;
    setNoticiaFetch(noticiaTitulo);
  }

  useEffect(() => {
    pegarNoticia();
  }, []);

  return (
    <div className="news">
      <div>
        <span>Notícia Destaque de Hoje</span>
      </div>
      <p className="title-news-today">
        {noticiaFetch}
      </p>
    </div>
  );
}

export default Noticia;