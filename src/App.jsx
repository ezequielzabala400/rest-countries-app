import { BrowserRouter } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import { GlobalStyles } from "./styles/GlobalStyles"

function App() {

  return (
    <>
    <BrowserRouter>
    <Layout />
    <GlobalStyles />
    </BrowserRouter>
    </>
  )
}

export default App
