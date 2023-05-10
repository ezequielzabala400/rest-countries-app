import styled from "styled-components";

export const HomeWrapper = styled.main`
    width: 100%;
    min-height: calc(100vh - 70px);
    background-color: ${({toggle}) => toggle ? 'var(--VeryDarkBlue)' : 'var(--VeryDarkGray)'};
    padding: 50px 10px;
`