import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://img.buzzfeed.com/buzzfeed-static/static/2018-05/22/15/enhanced/buzzfeed-prod-web-05/enhanced-buzz-29687-1527017651-6.jpg?downsize=900:*&output-format=auto&output-quality=auto"
          alt="Viúva Negra"
        />
        <div>
          <strong>Viúva Negra</strong>
          <span>Línguas</span>
        </div>
      </header>

      <p>
        Fluente em Russo, Inglês, Francês, Espanhol, Alemão, Coreano, Mandarim,
        Japonês e várias outras línguas.
        <br />
        <br />
        Comigo você aprende qualquer língua em apenas uma semana.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 200,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato.
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
