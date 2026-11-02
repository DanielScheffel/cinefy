import { Route, Routes } from "react-router-dom"

import Header from "./components/Header/Header.jsx"

import Home from "./pages/Home/Home"
import Details from "./pages/Details/Details.jsx"
import Favorites from "./pages/Favorites/Favorites.jsx"
import Search from "./pages/Search/Search.jsx"
import Categories from "./pages/Categories/Categories.jsx"
import Footer from "./components/Footer/Footer.jsx"


function App() {

  return (
    <>

    <Header />
    
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/filme/:id" element={<Details />} />
      <Route path="/favoritos" element={<Favorites />} />
      <Route path="/categorias" element={<Categories />} />
      <Route path="/buscar" element={<Search />} />

    </Routes>

    <Footer />
    
    </>
  )
}

export default App
