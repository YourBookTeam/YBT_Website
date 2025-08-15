import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Position from "./pages/Position";
import Services from "./pages/Services";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Footer from "./components/Footer";
import BookIdea from "./components/BookIdea";
import Navbar from "./components/Navbar";
import ScrollToAnchor from "./components/ScrollToAnchor";
import PromptingHappiness from "./pages/PromptingHappiness";

function App() {
  return (
    <Router basename="/YBT_Website/">
      <ScrollToAnchor />
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/position" element={<Position />} />
        <Route path="/prompting_happiness" element={<PromptingHappiness />} />
        {/* <Route path="/thirst" element={<Thirst />} />
        <Route
          path="/under_the_floorboards"
          element={<UnderTheFloorboards />}
        /> */}
        <Route path="/services" element={<Services />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <BookIdea />
      <Footer />
    </Router>
  );
}

export default App;
