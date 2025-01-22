
import { Conteudo, FundoDoProjeto } from "./PaginaPadrao.styled";
import Cabecalho from "../../componentes/Cabecalho/Cabecalho";
import Rodape from "../../componentes/Rodape/Rodape";
import { Outlet } from "react-router-dom";


const PaginaPadrao = () =>{
    return(
        <FundoDoProjeto>
            <Cabecalho></Cabecalho>
            <Conteudo>
                <Outlet/>
            </Conteudo>
            <Rodape></Rodape>
        </FundoDoProjeto>
    )
}

export default PaginaPadrao