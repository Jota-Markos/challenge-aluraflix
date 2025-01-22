import styled from "styled-components";

export const EstiloBotao = styled.button`
    width: 180px;
    height:54px;
    background-color: transparent;
    color: #f5f5f5;
    font-size: 15px;
    font-weight: 800;
    text-align: center;
    border: 2px solid #f5f5f5;
    border-radius: 15px;
    cursor: pointer;

    &.active{
        background-color: #1a1a1a;
        border: 2px solid #2271d1;
        color: #2271d1;
    }
`;