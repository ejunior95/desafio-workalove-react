import React from 'react';
import Container from './styles';
import LogoHome from '@/assets/LogoWorkalove.png';
import { Link } from 'react-router-dom';

function Home() {
  return(
    <Container>
      <div className="containerCentral">
        <img src={LogoHome} className="Logo" />
          <div className="containerLetras">
            <h1 className="tituloChatInterativo">Chat interativo</h1>
            <h4 className="subTituloChatInterativo">Workalove</h4>
          </div>
      </div>
      <Link to="/chat" className="btnIniciar">
        Vamos lá!
      </Link>
    </Container>
  );
}

export default Home;