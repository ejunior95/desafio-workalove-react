import React, {useState} from 'react';
import Container from './styles';
import { BsStarFill } from "react-icons/bs";

function RatingSelect(props) {
  const {resposta, setResposta} = props;
  
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  
  function setandoAvaliacao(rating) {
    setRating(rating);
    setResposta(rating);
  }

  return(
      <Container>
         {[...Array(5)].map((estrela, i) => {
           const ratingValue = i + 1;
           return(
             <label>
                <input 
                type="radio" 
                name="avaliacao" 
                value={ratingValue}
                onClick={() => setandoAvaliacao(ratingValue)}
                />
                <BsStarFill 
                className="estrela"
                color={ratingValue <= (hover || rating) ? "#FFC107" : "E4E5E9"}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
                />
             </label>
             ); 
            })}
      </Container>
  );
}

export default RatingSelect;