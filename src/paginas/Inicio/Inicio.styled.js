import styled from "styled-components"

export const Menu = styled.main`
display: flex;
flex-wrap: wrap;
gap: 8px;
justify-content: center;
background-color: ${({ theme }) => theme.cores.fundo};
flex: 1;
`;
