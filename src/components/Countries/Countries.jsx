import CountryItem from "../CountryItem/CountryItem"
import { CountriesWrapper } from "./CountriesStyles"
import {useSelector} from 'react-redux'
const Countries = () => {

  const countries = useSelector(state => state.countries.countries)

  return (
    <CountriesWrapper>
      {
        countries && countries.map(country => (<CountryItem key={country.name.common} {...country}/>))
      }
      
    </CountriesWrapper>
  )
}

export default Countries