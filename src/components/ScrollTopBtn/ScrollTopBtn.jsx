import { useSelector } from "react-redux"
import { ScrollBtn } from "./ScrollTopBtnStyles"

const ScrollTopBtn = () => {

  const isToggle = useSelector(state => state.darkMode.darkMode)

  return (
    <ScrollBtn 
    toggle= {isToggle}
    onClick={() => {window.scrollTo(0,0)}}>↕</ScrollBtn>
  )
}

export default ScrollTopBtn