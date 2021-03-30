import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import EmojiGif from '@/assets/emoji.gif';
import UserGif from '@/assets/user.gif';
import InputBox from '@/components/inputBox/index';
import DataSelect from '@/components/dataSelect/index';
import RatingSelect from '@/components/ratingSelect/index'
import Container  from './styles';

import api from '@/data/api';

function Chat() {
  
  const [passo, setPasso] = useState(0);
  const [respostas, setRespostas] = useState([]);

  function handleEnviarMensagem() {
    console.log({resposta: respostas[passo], length: respostas[passo]?.length})
    if (!respostas[passo] || respostas[passo].length === 0) {
      alert('Por favor, responda a pergunta');
      return;
    }

    setPasso(passo + 1);
  }

  function handleChangeRespostaAtual(texto) {
    console.log({texto});
    let respostasAtualizadas = respostas;

    respostasAtualizadas[passo] = texto;    
    
    setRespostas(respostasAtualizadas);
  }

  function handleSubmit () {
    const formSchema = Yup.object().shape({
      nome: Yup
        .string()
        .required(),
      cidadeEstado: Yup
        .string()
        .required(),
      dataNascimento: Yup
        .date()
        .required(),
      email: Yup
        .string()
        .email()
        .required(),
      stars: Yup
        .number()
        .required(),
    });

    const dados = {
      nome: respostas[0],
      cidadeEstado: respostas[1],
      dataNascimento: respostas[2],
      email: respostas[3],
      stars: respostas[4]
    };
    
    console.log(dados)

    formSchema
      .isValid(dados)
      .then(valid => {
        if (!valid) {
          alert('Erro ao validar um dos campos');
          return;
        }
      });

    api.post('enviar', dados)
      .then(resposta => console.log(resposta.data))
      .catch(err => alert('Ocorreu um erro ao avaliar. Tente novamente'));
  }

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
        <InputBox 
          placeholderMessage="Digite o seu nome..." 
          enviarMensagem={handleEnviarMensagem} 
          resposta={respostas[passo]}
          setResposta={handleChangeRespostaAtual}
        />
      </div>
        <img src={UserGif} className="containerEmojiDir" />
      </div>

      {
        passo >= 1 && (       
          <>
            <div className="containerMensagemEsq">
              <img src={EmojiGif} className="containerEmojiEsq" />
              <div className="containerConteudoMensagemEsq">
                {`Que satisfação, ${respostas[0]}. Agora que sei seu nome, qual cidade e estado que você mora?`}
              </div>
            </div>

            <div className="containerMensagemDir">
            <div className="containerConteudoMensagemDir">
              <InputBox 
                enviarMensagem={handleEnviarMensagem} 
                resposta={respostas[passo]}
                setResposta={handleChangeRespostaAtual}
              />
            </div>
              <img src={UserGif} className="containerEmojiDir" />
            </div>
          </>
        )
      }

      {
        passo >= 2 && (
          <>
            <div className="containerMensagemEsq">
              <img src={EmojiGif} className="containerEmojiEsq" />
              <div className="containerConteudoMensagemEsq">
                Legal, agora que sabemos sua cidade e estado. Quando foi que você nasceu?
              </div>
            </div>
            <div className="containerMensagemDir">
            <div className="containerConteudoMensagemDir">
            <DataSelect
            enviarMensagem={handleEnviarMensagem} 
            resposta={respostas[passo]}
            setResposta={handleChangeRespostaAtual}
            />
            </div>
              <img src={UserGif} className="containerEmojiDir" />
            </div>
          </>
        )
      }

      {
        passo >= 3 && (
          <>
            <div className="containerMensagemEsq ">
              <img src={EmojiGif} className="containerEmojiEsq" />
              <div className="containerConteudoMensagemEsq">
                Agora, me fala teu email, por gentileza.
              </div>
            </div>

            <div className="containerMensagemDir ">
            <div className="containerConteudoMensagemDir">
                <InputBox 
                enviarMensagem={handleEnviarMensagem} 
                resposta={respostas[passo]}
                setResposta={handleChangeRespostaAtual}
              />
            </div>
              <img src={UserGif} className="containerEmojiDir" />
            </div>
          </>
        )
      }

      {
        passo >= 4 && (
          <>
            <div className="containerMensagemEsq ">
              <img src={EmojiGif} className="containerEmojiEsq" />
              <div className="containerConteudoMensagemEsq">
                Você finalizou o teste! Faça uma avaliação sobre o processo que realizou até aqui. Nós agradecemos!
              </div>
            </div>

            <div className="containerMensagemDir ">
            <div className="containerConteudoMensagemDir">
              <RatingSelect 
                resposta={respostas[passo]}
                setResposta={handleChangeRespostaAtual}
              />
            </div>
              <img src={UserGif} className="containerEmojiDir" />
            </div>

            <div className="containerMensagemCentral">
             
              <Link onClick={handleSubmit} to="/home" className="btnVoltar">
                Salvar e enviar respostas!
              </Link>

            </div>
          </>
        )
      }
    </Container>
  );
}

export default Chat;