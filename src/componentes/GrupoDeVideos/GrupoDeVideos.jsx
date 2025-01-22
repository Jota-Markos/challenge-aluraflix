import { useVideoContexto } from "../../contexto/VideoContexto";
import Cartao  from "../Cartao/Cartao.jsx"
import { ListaDeVideos, TituloCategoria } from "./GrupoDeVideos.js";

const GrupoDeVideos = () => {
    const { videoCategoria } = useVideoContexto();

    return (
        <div>
            {Object.keys(videoCategoria).map((category) => (
                <div key={category}>
                    <TituloCategoria>{category}</TituloCategoria>
                    <ListaDeVideos>
                        {videoCategoria[category].map((video) => (
                            <Cartao key={video.id} video={video} />
                        ))}
                    </ListaDeVideos>
                </div>
            ))}
        </div>
    );

};

export default GrupoDeVideos;