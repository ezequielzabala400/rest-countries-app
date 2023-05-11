import styled from "styled-components";

export const CountryFeaturesContainer = styled.div`
    width: 100%;
    height: calc(100vh - 70px);
    background-color: ${({toggle}) => toggle ? 'var(--VeryDarkBlue)' : 'var(--White)'};
`

export const CountryFeaturesWrapper = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 50px;
    max-width: 500px;
    padding-top: 90px;
    margin: auto;
    background-color: ${({toggle}) => toggle ? 'var(--VeryDarkBlue)' : 'var(--White)'};
    @media (min-width: 768px) {
        max-width: 1200px;
    }
`

export const BackBtn = styled.div`
    position: relative;
    align-self: self-start;
    box-shadow: 4px 4px 12px ${({toggle}) => toggle ? 'black' : 'var(--DarkGray)'};
    color: ${({toggle}) => toggle ? 'var(--White)' : 'var(--DarkBlue)'};
    button{
        color: ${({toggle}) => toggle ? 'var(--White)' : 'var(--DarkBlue)'};
        background-color: ${({toggle}) => toggle ? 'var(--VeryDarkBlue)' : 'var(--White)'};
        padding: 10px;
        width: 120px;
        border: none;
        cursor: pointer;
    }

`

export const ArrowIcon = styled.div`
    position: absolute;
    font-size: 1.6rem;
    left: 24px;
    top: 9px;
`

export const CountryContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-evenly;
        gap: 30px;
    }
`

export const CountryFlag = styled.div`
    width: 100%;
    img{
        width: 100%;
        height: 260px;
        box-shadow: 4px 4px 12px ${({toggle}) => toggle ? 'var(--DarkGray)' : 'black'};
        @media (min-width: 768px) {
            max-width: 460px;
        }
    }
`

export const FeaturesWrapper = styled.div`
    display: flex;
    flex-direction: column;

`

export const CountryData = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 20px;
    color: ${({toggle}) => toggle ? 'var(--White)' : 'var(--DarkBlue)'};
    @media (min-width: 768px) {
    }

    h2{
        font-size: 2.2rem;
    }

    div{
        display: flex;
        flex-direction: column;
        gap: 30px;
        @media (min-width: 768px) {
            flex-direction: row;
        }
        div{
            display: flex;
        flex-direction: column;
        gap: 10px;
        p{
        font-size: 1.5rem;
        span{
            font-weight: 900;
        }
        }
    }
    }
`

export const BorderCountriesTitle = styled.h2`
font-size: 2rem;
        color: ${({toggle}) => toggle ? 'var(--White)' : 'var(--DarkBlue)'};
`

export const BorderCountries = styled.div`
    width: 100%;
    margin-top: 20px;
    div{
        display: flex;
        justify-content: center;
        gap: 30px;
        align-items: center;
        flex-wrap: wrap;
        padding: 16px;
        @media (min-width: 768px) {
            flex-direction: row;
        }
    }
`

export const BorderCountriesBtn = styled.button`
            width: 120px;
            height: 40px;
            border: none;
            box-shadow: 4px 4px 12px ${({toggle}) => toggle ? 'black' : 'var(--DarkGray)'};
            color: ${({toggle}) => toggle ? 'var(--White)' : 'var(--DarkBlue)'};
            background-color: ${({toggle}) => toggle ? 'var(--VeryDarkBlue)' : 'var(--White)'};
`