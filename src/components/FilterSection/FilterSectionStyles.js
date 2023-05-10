import styled from "styled-components";


export const InputsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    max-width: 1200px;
    margin: auto;
    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`

export const InputSearchCountryContainer = styled.form`
    position: relative;
    width: 100%;
    max-width: 460px;
`

export const SearchCountryInput = styled.input`
    width: 100%;
    padding: 16px 40px;
    border-radius: 10px;
    background-color: ${({isToggle}) => isToggle ? 'var(--DarkBlue)' : 'var(--White)'};
    color: ${({isToggle}) => isToggle ? 'var(--White)' : 'black'};
    box-shadow: 4px 4px 12px ${({isToggle}) => isToggle ? 'var(--DarkBlue)' : 'var(--DarkGray)'};
    border: none;
    ::placeholder{
        color: ${({isToggle}) => isToggle ? 'var(--White)' : 'var(--DarkGray)'};
    }
`

export const SearchIcon = styled.div`
    position: absolute;
    top: 14px;
    left: 16px;
    color: var(--DarkGray);
    font-size: 1.9rem;
`

export const FilterRegion = styled.select`
    margin-top: 50px;
    padding: 16px;
    font-size: 1.5rem;
    border-radius: 10px;
    cursor: pointer;
    border: none;
    background-color: ${({isToggle}) => isToggle ? 'var(--DarkBlue)' : 'var(--White)'};
    color: ${({isToggle}) => isToggle ? 'var(--White)' : 'black'};
    box-shadow: 4px 4px 12px ${({isToggle}) => isToggle ? 'var(--DarkBlue)' : 'var(--DarkGray)'};
    @media (min-width: 768px) {
        margin-top: 0;
    }
`