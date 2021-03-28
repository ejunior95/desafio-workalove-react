import React, { useEffect, useRef } from 'react';
import EmojiGif from '@/assets/emoji.gif';
import UserGif from '@/assets/user.gif';
import InputBox from '@/components/inputBox/index';
import  Container  from './styles';

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
            Olá, eu sou Chatnilson, tudo bem?
            Para começarmos, preciso saber seu nome.
          </div>
        </div>

    </Container>
  );
}

export default Chat;