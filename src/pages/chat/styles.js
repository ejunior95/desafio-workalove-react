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
    .containerMensagemDir {
        width: 100%;
        padding-top: 3%;
        padding-bottom: 5%;
        display: flex;
        align-items: center;
        justify-content: right;
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
`;

export default Container;