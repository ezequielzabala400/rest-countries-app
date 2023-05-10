import { CountryItemContainer, CountryItemFeatures, CountryItemImg, CountryItemTitle } from "../Countries/CountriesStyles"
import {useSelector} from 'react-redux'
const CountryItem = ({name, capital, region, population, flags}) => {
  
    const isToggle = useSelector(state => state.darkMode.darkMode);
  return (
    <CountryItemContainer toggle={isToggle ? isToggle : undefined}>
      
        <CountryItemImg>
          <img src={flags.png} alt="" />
        </CountryItemImg>

        <CountryItemTitle toggle={isToggle ? isToggle : undefined}>{name.common}</CountryItemTitle>

        <CountryItemFeatures toggle={isToggle ? isToggle : undefined}>
            <p><span>Population:</span> {population}</p>
            <p><span>Region:</span> {region}</p>
            <p><span>Capital:</span> {capital}</p>
        </CountryItemFeatures>

    </CountryItemContainer>
  )
}

export default CountryItem