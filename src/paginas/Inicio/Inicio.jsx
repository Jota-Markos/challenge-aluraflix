// import styled from "styled-components";
import React from "react";
import Banner from "../../componentes/Banner/Banner";
import { Menu } from "./Inicio.styled";
import { useVideoContexto } from "../../contexto/VideoContexto"
import GrupoDeVideos from "../../componentes/GrupoDeVideos/GrupoDeVideos.jsx";

// const OlaMundo = styled.h1`
// color: #cccccc;
// `

const PaginaInicial = () => {
    const { videos, carregando } = useVideoContexto();

    if (carregando) {
        return <div>Carregando..</div>
    }

    const catalogoDeVideo = videos[0];

    return (
        <>
            <Menu>
                {catalogoDeVideo && <Banner video={catalogoDeVideo} />}
                <GrupoDeVideos />
            </Menu>

        </>
    );
};

export default PaginaInicial;