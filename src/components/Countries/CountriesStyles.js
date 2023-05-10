import styled from "styled-components";

export const CountriesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 60px;
    max-width: 1200px;
    margin: 60px auto;
`

export const CountryItemContainer = styled.div`
    height: 300px;
    width: 250px;
    background-color: ${({toggle}) => toggle ? 'var(--DarkBlue)' : 'var(--White)'};
    box-shadow: 4px 4px 12px ${({toggle}) => toggle ? 'var(--DarkBlue)' : 'var(--DarkGray)'};
`

export const CountryItemImg = styled.div`
    img{
        width: 100%;
        height: 150px;
    }
`

export const CountryItemTitle = styled.h2`
    font-size: 1.9rem;
    padding: 10px;
    color: ${({toggle}) => toggle ? 'var(--White)' : 'var(--DarkBlue)'};
`

export const CountryItemFeatures = styled.div`
    font-size: 1.3rem;
    padding: 0px 12px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    color: ${({toggle}) => toggle ? 'var(--White)' : 'var(--DarkBlue)'};
    span{
        font-weight: 800;
    }
`
