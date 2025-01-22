
import { Button, FormularioConteudo, FormularioTitulo, Input, Textarea } from "./AdicionarVideo.styled";
import { useState } from "react";
import { useVideoContexto } from "../../contexto/VideoContexto";

// const AdicioneAqui = styled.h1`
// color: #cccccc;
//`

const PaginaAdicao = () => {
    const {addVideo} = useVideoContexto();
    const [DadosFormulario, setDadosFormulario] = useState({
        titulo: "",
        categoria: "",
        imagem: "",
        video: "",
        descricao: "",

    })

    const fazMudanca = (requisito) => {
        const { name, value } = requisito.target;
        setDadosFormulario({ ...DadosFormulario, [name]: value });
    };

    const criaVideo = (requisito) => {
        requisito.preventDefault();
        addVideo(DadosFormulario);
        setDadosFormulario({
          titulo: "",
          categoria: "",
          imagem: "",
          video: "",
          descricao: "",
        });
    };

    const resetaFormulario = () => {
        setDadosFormulario({
          titulo: "",
          categoria: "",
          imagem: "",
          video: "",
          descricao: "",
        });
    };

    return(
    <FormularioConteudo onSubmit={criaVideo}>
        <FormularioTitulo>Adicione seu Novo Vídeo</FormularioTitulo>
        <Input
        type = "text"
        name = "titulo"
        placeholder = "Titulo"
        value={DadosFormulario.titulo}
        onChange={fazMudanca}
        required
        />
        <Input
        type = "text"
        name = "categoria"
        placeholder = "Categoria"
        value={DadosFormulario.categoria}
        onChange={fazMudanca}
        required
        />
        <Input
        type = "text"
        name = "imagem"
        placeholder = "URL da Imagem"
        value={DadosFormulario.imagem}
        onChange={fazMudanca}
        required
        />
        <Input
        type = "text"
        name = "video"
        placeholder = "URL do Vídeo"
        value={DadosFormulario.video}
        onChange={fazMudanca}
        required
        />
        <Textarea
        name="descricao"
        placeholder = "Descrição"
        value={DadosFormulario.descricao}
        onChange={fazMudanca}
        required
        />

        <Button type="submit">Salvar</Button>
        <Button type="button" onClick={resetaFormulario}>Limpar</Button>
    </FormularioConteudo>
    )
    
}

export default PaginaAdicao