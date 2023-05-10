import { ArrowIcon, BackBtn, BorderCountries, BorderCountriesBtn, BorderCountriesTitle, CountryContainer, CountryData, CountryFeaturesContainer, CountryFeaturesWrapper, CountryFlag, FeaturesWrapper } from "./CountryFeatureStyles"
import {FaArrowLeft} from 'react-icons/fa'
import {useParams} from 'react-router-dom'
import {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { searchCountry } from "../../data/countriesData"
import {useNavigate} from 'react-router-dom'
const CountryFeatures = () => {

    const isToggle = useSelector(state => state.darkMode.darkMode);
    const dispatch = useDispatch();
    const data = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(searchCountry(data.name))
    } ,[])
    
    const countryInfo = useSelector(state => state.country.country);

  return (
    <CountryFeaturesContainer toggle={isToggle ? isToggle : undefined}>
        <CountryFeaturesWrapper toggle={isToggle ? isToggle : undefined}>
        
            <BackBtn toggle={isToggle ? isToggle : undefined}>
            <ArrowIcon>
                <FaArrowLeft />
            </ArrowIcon>
            <button onClick={() => navigate('/')}>Back</button>
        </BackBtn>
        {countryInfo ? <>
        <CountryContainer>
            <CountryFlag>
                <img src={countryInfo[0].flags.svg} alt="" />
            </CountryFlag>

            <FeaturesWrapper>
            <CountryData toggle={isToggle ? isToggle : undefined}>
                <h2>{countryInfo[0].name.common}</h2>
                <div>
                    <div>
                        <p><span>Native Name:</span> {Object.values(countryInfo[0].name.nativeName)[0].official}</p>
                        <p><span>Population:</span> {countryInfo[0].population}</p>
                        <p><span>Region:</span> {countryInfo[0].region}</p>
                        <p><span>Sub Region:</span> {countryInfo[0].subregion}</p>
                        <p><span>Capital:</span> {countryInfo[0].capital}</p>
                        </div>
                    <div>
                        <p><span>Top Level Domain:</span> {countryInfo[0].tld}</p>
                        <p><span>Currencies:</span> {Object.entries(countryInfo[0].currencies)[0][1].name}</p>
                        <p><span>Languages:</span> {Object.values(countryInfo[0].languages)}</p>
                    </div>
                </div>
            </CountryData>

            <BorderCountries>
                <BorderCountriesTitle toggle={isToggle ? isToggle : undefined}>
                    BorderCountries:
                </BorderCountriesTitle>
                <div>
                    {countryInfo[0].borders.map(country => (<BorderCountriesBtn key={country} isToggle={isToggle}>{country}</BorderCountriesBtn>))}
                </div>
            </BorderCountries>
            </FeaturesWrapper>
        </CountryContainer>
        </> : <h2>Cargando</h2>}
    </CountryFeaturesWrapper>
    </CountryFeaturesContainer>
  )
}

export default CountryFeatures