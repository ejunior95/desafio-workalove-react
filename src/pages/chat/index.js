import React, { useEffect, useRef } from 'react';
import EmojiGif from '@/assets/emoji.gif';
import UserGif from '@/assets/user.gif';
import InputBox from '@/components/inputBox/index';
import  Container  from './styles';
import { Link } from 'react-router-dom';

function Chat() {

  return(
    <Container>
        
        <div className="containerMensagemEsq">
          <img src={EmojiGif} className="containerEmojiEsq" />
          <div className="containerConteudoMensagemEsq">
            Olá, eu sou Chatnilson, tudo bem?
            Para começarmos, preciso saber seu nome.
          </div>
        </div>

        <div className="containerMensagemDir">
        <div className="containerConteudoMensagemDir">
          <InputBox />
        </div>
          <img src={UserGif} className="containerEmojiDir" />
        </div>

        <div className="containerMensagemEsq">
          <img src={EmojiGif} className="containerEmojiEsq" />
          <div className="containerConteudoMensagemEsq">
            Que satisfação, nome do input. Agora que sei seu nome, qual cidade e estado que você mora?
          </div>
        </div>

        <div className="containerMensagemDir">
        <div className="containerConteudoMensagemDir">
          <InputBox />
        </div>
          <img src={UserGif} className="containerEmojiDir" />
        </div>

        <div className="containerMensagemEsq">
          <img src={EmojiGif} className="containerEmojiEsq" />
          <div className="containerConteudoMensagemEsq">
            Legal, agora que sabemos sua cidade e estado, quando foi que você nasceu?
          </div>
        </div>

        <div className="containerMensagemDir">
        <div className="containerConteudoMensagemDir">
          <InputBox />
        </div>
          <img src={UserGif} className="containerEmojiDir" />
        </div>

        <div className="containerMensagemEsq">
          <img src={EmojiGif} className="containerEmojiEsq" />
          <div className="containerConteudoMensagemEsq">
            Agora, me fala teu email, por gentileza.
          </div>
        </div>

        <div className="containerMensagemDir">
        <div className="containerConteudoMensagemDir">
          <InputBox />
        </div>
          <img src={UserGif} className="containerEmojiDir" />
        </div>

        <div className="containerMensagemEsq">
          <img src={EmojiGif} className="containerEmojiEsq" />
          <div className="containerConteudoMensagemEsq">
            Você finalizou o teste! Faça uma avaliação sobre o processo que realizou até aqui. Nós agradecemos!
          </div>
        </div>

        <div className="containerMensagemDir">
        <div className="containerConteudoMensagemDir">
          <InputBox />
        </div>
          <img src={UserGif} className="containerEmojiDir" />
        </div>

        <div className="containerMensagemCentral">
      <Link to="/home" className="btnVoltar">
        Salvar e enviar respostas!
      </Link>
        </div>

    </Container>
  );
}

export default Chat;