import{BannerConteudo,
    BannerFundo,
    BannerGrupo,
    BannerTitulo,
    BannerDescricao,
    BannerImagem} from "./Banner.styled"

const Banner = ({video}) => {
    return(
        <BannerConteudo>
            <BannerFundo src={video.imagem} alt={video.titulo}/>
            
            <BannerGrupo>
                <div>
                    <BannerTitulo categoria = {video.categoria}>
                        {video.categoria}
                    </BannerTitulo>
                    <BannerDescricao>{video.descricao}</BannerDescricao>
                </div>
                <BannerImagem src={video.imagem} alt = {video.ttitulo}></BannerImagem>
            </BannerGrupo>
        </BannerConteudo>
        
    )
}

export default Banner