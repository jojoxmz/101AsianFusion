import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Menus from "./pages/Menus";
import Manager from "./pages/Manager";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App = () => (<Router>
  <div>
    <Nav/>
    <Route exact="exact" path="/" component={About}/>
    <Route exact="exact" path="/about" component={About}/>
    <Route exact="exact" path="/contact" component={Contact}/>
    <Route exact="exact" path="/menus" component={Menus}/>
    <Route exact="exact" path="/manager" component={Manager}/>
    <Route exact="exact" path="/gallery" component={Gallery}/>
    <Footer/>
  </div>
</Router>);

export default App;
