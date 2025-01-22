import styled from "styled-components"


export const RodapeConteudo = styled.footer`

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({theme}) => theme.cores.cor};
  background-color: ${({theme}) => theme.cores.primeira};
  padding: 8px;
  box-shadow: 0px 0px 4px 4px #2271d1;
`

export const LogoFlix = styled.img`
height: 50px;
`