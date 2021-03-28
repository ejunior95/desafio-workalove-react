import styled from 'styled-components';

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .Logo {
        height: 80%;
    }
    .containerCentral {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 30%;
    }
    .containerLetras {
    }
    .btnIniciar {
        padding: 10px 30px 10px 30px;
        border-radius: 30px;
        outline: none;
        border-style: none;
        cursor: pointer;
        font-size: 3vh;
        text-decoration: none;
        /* color: purple; */
        color: #ffffff;
        /* background-color: #ffffff; */
        border: 1px solid #ffffff;
        text-align:center;

    }
    .btnIniciar:hover {
         color: purple;
        background-color: #ffffff;
    }
    .tituloChatInterativo {
        font-size: 5vh;
        color: #ffffff;
    }
    .subTituloChatInterativo {
        color: #ffffff;
        text-align: right;
        width: 100%;
    }
`;

export default Container;