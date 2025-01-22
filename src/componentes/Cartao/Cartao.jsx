import { BotaoIcone,
    CartaoConteudo,
    CartaoImagem,
    CartaoOpcoes 
} from "./Cartao";

import{useVideoContexto} from "../../contexto/VideoContexto";

import { FaTrash, FaEdit } from "react-icons/fa";


const Cartao = ({video}) => {
    const {delVideo, upVideo} = useVideoContexto();

    const fazEdit = () => {
        const videoAtualizado = { ...video, titulo: "Novo Titulo"};
        upVideo(video.id, videoAtualizado);
    };



    return(
        <CartaoConteudo>
            <CartaoImagem src={video.imagem} alt={video.titulo}/>
            <CartaoOpcoes>
                <BotaoIcone onClick={()=>delVideo(video.id)}>
                    <FaTrash />
                </BotaoIcone>
                <BotaoIcone onClick={fazEdit}>
                    <FaEdit />
                </BotaoIcone>
            </CartaoOpcoes>
        </CartaoConteudo>
    );
};

export default Cartao;