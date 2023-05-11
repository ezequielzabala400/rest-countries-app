import { useSelector } from "react-redux"
import { ScrollBtn } from "./ScrollTopBtnStyles"
import {FaArrowUp} from 'react-icons/fa'

const ScrollTopBtn = () => {

  const isToggle = useSelector(state => state.darkMode.darkMode)

  return (
    <ScrollBtn 
    toggle= {isToggle ? isToggle : undefined}
    onClick={() => {window.scrollTo(0,0)}}>
      <FaArrowUp />
    </ScrollBtn>
  )
}

export default ScrollTopBtn