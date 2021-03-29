import styled from 'styled-components';

const Container = styled.div`
    height: 100vh;
    background: #DC2424;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #4A569D, #DC2424);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #4A569D, #DC2424); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    .containerMensagemEsq {
        width: 100%;
        padding-top: 1%;
        padding-bottom: 2%;
        display: flex;
        align-items: center;
        justify-content: left;
    }
    .containerMensagemEsq.esconder,
    .containerMensagemDir.esconder,
    .containerMensagemCentral.esconder {
        display: none
    }
    .containerMensagemDir {
        width: 100%;
        padding-top: 3%;
        padding-bottom: 5%;
        display: flex;
        align-items: center;
        justify-content: right;
    }
    .containerMensagemCentral {
        width: 100%;
        padding-top: 1%;
        padding-bottom: 2%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .containerEmojiEsq {
        width: 15%;
    }
    .containerEmojiDir {
        width: 10%;
        position: absolute;
        right: 2%;
    }
    .containerConteudoMensagemEsq,
    .containerConteudoMensagemDir {
        background-color: #fff;
        padding: 10px;
        border-radius: 5px;
        max-width: 75%;
        box-sizing: border-box;
    }
    .containerConteudoMensagemDir {
        position: absolute;
        right: 12%;
    }
    .btnVoltar {
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
    .btnVoltar:hover {
         color: purple;
        background-color: #ffffff;
    }
`;

export default Container;