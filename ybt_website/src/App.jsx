import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Position from "./pages/Position";
import Success_Stories from "./pages/Success_Stories";
import Services from "./pages/Services";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Footer from "./components/Footer";
import BookIdea from "./components/BookIdea";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router basename="/YBT_Website/">
      <AppContent/>
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/position" element={<Position />} />
        <Route path="/success_stories" element={<Success_Stories />} />
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
