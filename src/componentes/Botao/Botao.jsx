import {EstiloBotao} from "./Botao.styled";


const Botao = ({children, primary, className, ...props}) =>{
    return(
        <EstiloBotao primary={primary} className={className} {...props}>
            {children}
        </EstiloBotao>
    );
};

export default Botao;