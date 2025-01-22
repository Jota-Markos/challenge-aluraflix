import { LogoFlix, RodapeConteudo } from "./Rodape.styled";
import logodoflix from "../../assets/logoflix.png"


const Rodape = () => {
    return(
        <RodapeConteudo>
            <LogoFlix src={logodoflix} alt="AluraFlix logo"/>
            <p>Projeto desenvolvido na Alura</p>
        </RodapeConteudo>
    );
};

export default Rodape;