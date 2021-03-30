import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .estrela {
    font-size: 30px;
    padding: 2px;
    cursor: pointer;
    transition: .1s ease-in-out;
  }
  input[type="radio"]{
    display: none;
  }
`;

export default Container;