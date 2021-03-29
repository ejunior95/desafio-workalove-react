import React from 'react';
import Container from './styles';
import { BsFillCaretRightFill } from "react-icons/bs";

function DataSelect(props) {
    const {enviarMensagem, resposta, setResposta} = props;
  return(
    <Container>
        <input 
         value={resposta} 
         onChange={(e) => setResposta(e.target.value)} 
         type="date" 
         className="inputEstilo" 
        />
        <div onClick={enviarMensagem} className="btnCarregar">
            <BsFillCaretRightFill className="iconeBtn"/>
         </div>
    </Container>
  );
}

export default DataSelect;