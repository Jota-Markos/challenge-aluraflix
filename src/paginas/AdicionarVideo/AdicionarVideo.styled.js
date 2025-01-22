import styled from "styled-components"

export const FormularioConteudo = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    max-width: 500px;
    background-color: ${({ theme }) => theme.cores.segunda};
    padding: 32px;
    border-radius: 8px;
    margin: 0 auto;
    box-shadow: 0px 0px 2px 2px  #2271d1;
    
`;

export const FormularioTitulo = styled.h2`
    
    text-align: center;
    color: ${({ theme }) => theme.cores.cor};
    margin-bottom: 16px;
`;

export const Input = styled.input`
    background-color: ${({ theme }) => theme.cores.fundo};
    color: ${({ theme }) => theme.cores.cor};
    border: 1px solid ${({ theme }) => theme.cores.primeira};
    border-radius: 4px;

    padding: 8px;    
    font-size: 16px;
    
    
`

export const Textarea = styled.textarea`
    background-color: ${({ theme }) => theme.cores.fundo};
    color: ${({ theme }) => theme.cores.cor};
    border: 1px solid ${({ theme }) => theme.cores.primeira};
    border-radius: 4px;

    padding: 8px;    
    font-size: 16px;
`

export const Button = styled.button`
    background-color: ${({ theme }) => theme.cores.hoverPrimeiro};
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px; 
    padding: 12px;
    
    cursor: pointer;

    &:hover{
        background-color: ${({ theme }) => theme.cores.primeira};
    }

`;
