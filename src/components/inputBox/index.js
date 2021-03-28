import React from 'react';
import Container from './styles';
import { BsFillCaretRightFill } from "react-icons/bs";

function InputBox() {
  return(
      <Container>
         <input type="text" placeholder="Digite seu nome aqui..."  className="inputEstilo"/>
         <div className="btnCarregar">
            <BsFillCaretRightFill className="iconeBtn"/>
         </div>
      </Container>
  );
}

export default InputBox;