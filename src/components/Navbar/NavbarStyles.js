import styled from "styled-components";

export const NavbarWrapper = styled.nav`
    padding: 0 36px;
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    background-color: ${({toggle}) => toggle ? 'var(--DarkBlue)' : 'white'};
`

export const NavbarTitle = styled.h2`
        font-weight: 800;
        font-size: 1.3rem;
        color: ${({toggle}) => toggle ? 'var(--White)' : 'var(----DarkBlue)'};

        @media (min-width: 768px) {
            font-size: 1.8rem;
        }
`

export const ToggleDarkModeContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.1rem;
    font-weight: 600;
    color: ${({toggle}) => toggle ? 'var(--White)' : 'var(----DarkBlue)'};
    cursor: pointer;
    @media (min-width: 768px) {
            font-size: 1.5rem;
        }
`

