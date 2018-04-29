import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Gallery from "./pages/Gallery";
// import Menus from "./pages/Menus";
import Navbar from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";


const App = () => (
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Footer />
      </Wrapper>
    </div>
  </Router>
);

export default App;
