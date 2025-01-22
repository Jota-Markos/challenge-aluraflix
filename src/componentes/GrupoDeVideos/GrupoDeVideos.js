import styled from "styled-components";


export const TituloCategoria = styled.h2`
    width: 25%;
    color: #fff;
    background-color: ${({ theme, categoria }) =>
    theme.cores.grupoDeVideos[categoria]};
    padding:8px;
    border-radius: 8px;
`;

export const ListaDeVideos = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;