import { useSelector } from "react-redux"
import { ScrollBtn } from "./ScrollTopBtnStyles"

const ScrollTopBtn = () => {

  const isToggle = useSelector(state => state.darkMode.darkMode)

  return (
    <ScrollBtn 
    isToggle= {isToggle}
    onClick={() => {window.scrollTo(0,0)}}>↕</ScrollBtn>
  )
}

export default ScrollTopBtn