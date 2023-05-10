import Countries from "../Countries/Countries"
import FilterSection from "../FilterSection/FilterSection"
import ScrollTopBtn from "../ScrollTopBtn/ScrollTopBtn"
import { HomeWrapper } from "./HomeStyles"
import {useSelector} from 'react-redux'

const Home = () => {

  const isToggle = useSelector(state => state.darkMode.darkMode)

  return (
    <HomeWrapper toggle={isToggle}>
        <FilterSection />
        <Countries />
        <ScrollTopBtn />
    </HomeWrapper>
  )
}

export default Home