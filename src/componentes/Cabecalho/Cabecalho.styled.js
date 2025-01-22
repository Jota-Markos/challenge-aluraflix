import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Navegacao = styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
background-color: ${({ theme }) => theme.cores.primeira};
padding: 24px 64px;
box-shadow: 0px 0px 4px 2px #2271d1;
`;

export const LogoFlix = styled.img`
width: 169px;
margin-right: 32px;
`;

export const NavegacaoBotoes = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 400px;
`;

export const NavegacaoLink = styled(NavLink)`
    &.active button{
        background-color: #000000;
        border: 2px solid #2271d1;
        color: #2271d1;
    }
`;