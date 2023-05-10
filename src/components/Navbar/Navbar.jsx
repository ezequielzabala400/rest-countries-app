import { NavbarWrapper, ToggleDarkModeContainer } from "./NavbarStyles"
import {FaRegMoon} from 'react-icons/fa'
import {useDispatch, useSelector} from 'react-redux'
import { toggleDarkMode } from "../../redux/slices/DarkMode"

const Navbar = () => {

  const isToggle = useSelector(state => state.darkMode.darkMode)
  const dispatch = useDispatch()

  return (
    <NavbarWrapper isToggle={isToggle}>
        <h2 isToggle={isToggle}>Where in the world?</h2>
        <ToggleDarkModeContainer 
        isToggle={isToggle}
        onClick={() => dispatch(toggleDarkMode())}>
            <FaRegMoon />
            <p>Dark Mode</p>
        </ToggleDarkModeContainer>
    </NavbarWrapper>
  )
}

export default Navbar