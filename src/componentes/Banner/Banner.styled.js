import styled from "styled-components"


export const BannerConteudo = styled.div`
width: 100%;
height:400px;
position: relative;
`

export const BannerFundo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.5);
`
export const BannerGrupo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const BannerTitulo = styled.h1`
  display: inline-block;
  background-color: ${({theme, categoria})=>
  theme.cores.grupoDeVideos[categoria]};

  padding: 8px 16px;
  border-radius: 8px;
  font-size: 40px;
`
export const BannerDescricao = styled.p`
  font-size: 18px;
  margin-top: 16px;
`

export const BannerImagem = styled.img`
  width: 600px;
  border-radius: 15px;
  box-shadow: 0px 0px 12px 4px #2271d1;
`