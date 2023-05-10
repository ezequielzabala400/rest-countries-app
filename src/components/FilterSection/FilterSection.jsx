import { FilterRegion, InputSearchCountryContainer, InputsWrapper, SearchCountryInput, SearchIcon } from "./FilterSectionStyles"
import {FaSearch} from 'react-icons/fa'
import { useDispatch,useSelector } from "react-redux/es/exports"
import { searchRegion } from "../../data/countriesData"
import { useState } from "react"
import { useNavigate } from "react-router"
// import { searchForRegion } from "../../redux/slices/Countries"
const FilterSection = () => {
    const isToggle = useSelector(state => state.darkMode.darkMode)
    const dispatch = useDispatch();

    const [country, setCountry] = useState('')
    const navigate = useNavigate()

  return (
    <>
        <InputsWrapper>
            <InputSearchCountryContainer onSubmit={(e) => {
                e.preventDefault()
                navigate(`/country/${country}`)
            }}>
                <SearchCountryInput 
                isToggle={isToggle}
                placeholder="Search for a country..."
                onChange={(e) => setCountry(e.target.value)}
                />
                <SearchIcon>
                    <FaSearch />
                </SearchIcon>
            </InputSearchCountryContainer>

            <FilterRegion 
            isToggle={isToggle}
            onChange={(e) => dispatch(searchRegion(e.target.value))}>
                <option value="" disabled selected>Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </FilterRegion>
        </InputsWrapper>
    </>
  )
}

export default FilterSection