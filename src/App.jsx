import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Position from "./pages/Position";
import Services from "./pages/Services";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Footer from "./components/footer/Footer";
import BookIdea from "./components/BookIdea";
import Navbar from "./components/navbar/Navbar";
import ScrollToAnchor from "./components/ScrollToAnchor";
import SuccessStory from "./pages/SuccessStory";

function App() {
  return (
    <Router basename="/">
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  return (
    <>
      <ScrollToAnchor />
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/position/:id" element={<Position />} />
        {/* Success Stories */}
        <Route path="/prompting_happiness" element={<SuccessStory />} />
        <Route path="/thirst" element={<SuccessStory />} />
        <Route path="/under_the_floorboards" element={<SuccessStory />} />
        {/* End of Success Stories */}
        <Route path="/services" element={<Services />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      { location.pathname !== "/contact" && <BookIdea/> }
      <Footer />
    </>
  )
}

export default App;
