import { Provider } from "react-redux"
import Home from "../Home/Home"
import Navbar from "../Navbar/Navbar"
import { store } from "../../redux/store/store"
import { Route, Routes } from "react-router"
import NotFound from "../NotFound/NotFound"
import CountryFeatures from "../CountryFeautres/CountryFeature"

const Layout = () => {
  return (
    <>
        <Provider store={store}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/country">
              <Route path="/country:name" element={<CountryFeatures />}/>
            </Route>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </Provider>
    </>
  )
}

export default Layout