import { Navegacao, LogoFlix,NavegacaoBotoes, NavegacaoLink } from "./Cabecalho.styled";
import Botao from "../Botao/Botao";
import logodoflix from "../../assets/logoflix.png"


const Cabecalho = () =>{
    return(
        <header>
            <Navegacao>
                <LogoFlix src = {logodoflix} alt="Logo do AluraFlix"/>
                <NavegacaoBotoes>
                    <NavegacaoLink 
                    to="/"
                    className={({taAtivo})=>(taAtivo ? "active" : "")}
                    >
                        <Botao>Pagina Inicial</Botao>
                    </NavegacaoLink>

                    <NavegacaoLink 
                    to="/adicionarvideo"
                    className={({taAtivo})=>(taAtivo ? "active" : "")}
                    >
                        <Botao>Novo Video</Botao>
                    </NavegacaoLink>
                </NavegacaoBotoes>
            </Navegacao>
        </header>
    )
}

export default Cabecalho;