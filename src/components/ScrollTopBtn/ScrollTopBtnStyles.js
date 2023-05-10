import styled from "styled-components";

export const ScrollBtn = styled.button`
    position: fixed;
    bottom: 0;
    right: 0;
    background-color: ${({isToggle}) => isToggle ? 'var(--VeryDarkBlue)' : 'var(--White)'};
    color: ${({isToggle}) => isToggle ? 'var(--White)' : 'var(--VeryDarkBlue)'};
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin: 0 26px 16px 0;
    cursor: pointer;
    font-size: 2rem;
`