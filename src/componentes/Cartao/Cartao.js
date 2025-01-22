import styled from "styled-components"

export const CartaoConteudo = styled.div`
  width: 300px;
  background-color: ${({ theme, categoria }) =>
    theme.cores.grupoDeVideos[categoria]};
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s;

  &:hover{
    transform: scale(1.05);
  }

`;

export const CartaoImagem = styled.img`
width: 100%;
height: auto;
`;

export const CartaoOpcoes = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 8px;
  background: rgba(0, 0, 0, 0.7);
`;

export const BotaoIcone = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;

  &:hover{
    color: #2271d1;
  }
`;
