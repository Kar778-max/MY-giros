import { Component } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home"
import About from "./pages/about us"
import Menu from "./pages/Menu"
import Work from "./pages/Work"
import Contact from "./pages/Contact"



import Axandner from "./pages/Home/divcyty/axand";
import Axcaner from "./pages/Home/divcyty/axcan";
import Burger from "./pages/Home/divcyty/burger";
import Fri from "./pages/Home/divcyty/fri";
import Giros from "./pages/Home/divcyty/giros";
import Girosapse from "./pages/Home/divcyty/girosapse";
import Gril from "./pages/Home/divcyty/gril";
import Koktel from "./pages/Home/divcyty/koktel";
import Naget from "./pages/Home/divcyty/Naget";
import Naxacash from "./pages/Home/divcyty/naxacash"
import Sendvich from "./pages/Home/divcyty/sendvich"
import Sous from "./pages/Home/divcyty/sous"
import Veji from "./pages/Home/divcyty/veji"
import Vitaminbar from "./pages/Home/divcyty/vitaminbar"



class App extends Component {
  render() {
    return (

      <div>
        
        <BrowserRouter>
          <Header />
          <div style={{ minHeight: '100vh' }}>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About us" element={<About />} />
              <Route path="/Menu" element={<Menu />} />
              <Route path="/Work" element={<Work />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>

            <Routes>
              <Route path="/Burger" element={<Burger />} />
              <Route path="/Giros" element={<Giros />} />
              <Route path="/Girosapse" element={<Girosapse />} />
              <Route path="/Gril" element={<Gril />} />
              <Route path="/NagetBurger" element={<Naget />} />
              <Route path="/Sendvich" element={<Sendvich />} />
              <Route path="/Axcan" element={<Axcaner />} />
              <Route path="/Fri" element={<Fri />} />
              <Route path="/Sous" element={<Sous />} />
              <Route path="/Naxachash" element={<Naxacash />} />
              <Route path="/Veji" element={<Veji />} />
              <Route path="/axadner" element={<Axandner />} />
              <Route path="/Koktel" element={<Koktel />} />
              <Route path="/Vitaminbar" element={<Vitaminbar />} />


            </Routes>
          </div>

            <Footer />
        </BrowserRouter>
      </div>
    )
  }
} export default App