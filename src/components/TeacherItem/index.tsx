import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://spinoff.com.br/wp-content/uploads/Vi%C3%BAva-Negra-1200x900.jpg" alt="Viúva Negra" />
        <div>
          <strong>Viúva Negra</strong>
          <span>Línguas</span>
        </div>
      </header>

      <p>
        Fluente em Russo, Inglês, Francês, Espanhol, Alemão, Coreano, Mandarim, Japonês e várias outras línguas.
      <br /><br />
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
  )
}

export default TeacherItem;
