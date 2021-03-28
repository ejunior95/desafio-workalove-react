import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  .inputEstilo {
    padding: 11px 0px 10px 11px;
    outline: none;
    font-size: 15px;
    border: 1px solid lightgray;
    border-radius: 5px 0px 0px 5px;
  }
  .btnCarregar {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 40px;
    min-height: 38px;
    border: 1px solid lightgray;
    border-radius: 0px 5px 5px 0px;
    cursor: pointer;
  }
  .iconeBtn {
    font-size: 30px;
  }
`;

export default Container;