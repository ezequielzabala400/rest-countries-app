import { NavbarTitle, NavbarWrapper, ToggleDarkModeContainer } from "./NavbarStyles"
import {FaRegMoon} from 'react-icons/fa'
import {useDispatch, useSelector} from 'react-redux'
import { toggleDarkMode } from "../../redux/slices/DarkMode"

const Navbar = () => {

  const isToggle = useSelector(state => state.darkMode.darkMode)
  const dispatch = useDispatch()

  return (
    <NavbarWrapper toggle={isToggle ? isToggle : undefined}>
        <NavbarTitle toggle={isToggle ? isToggle : undefined}>Where in the world?</NavbarTitle>
        <ToggleDarkModeContainer 
        toggle={isToggle ? isToggle : undefined}
        onClick={() => dispatch(toggleDarkMode())}>
            <FaRegMoon />
            <p>Dark Mode</p>
        </ToggleDarkModeContainer>
    </NavbarWrapper>
  )
}

export default Navbar