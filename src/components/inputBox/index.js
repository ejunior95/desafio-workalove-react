import React from 'react';
import Container from './styles';
import { BsFillCaretRightFill } from "react-icons/bs";

function InputBox(props) {

  const {placeholderMessage, enviarMensagem, resposta, setResposta} = props;
  return(
      <Container>
         <input 
            value={resposta} 
            onChange={(e) => setResposta(e.target.value)} 
            type="text" 
            placeholder={placeholderMessage}
            className="inputEstilo"
         />
         <div onClick={enviarMensagem} className="btnCarregar">
            <BsFillCaretRightFill className="iconeBtn"/>
         </div>
      </Container>
  );
}

export default InputBox;