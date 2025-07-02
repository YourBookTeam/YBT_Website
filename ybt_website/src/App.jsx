import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Careers from './pages/Careers';
import Position from './pages/Position';
import Success_Stories from './pages/Success_Stories';
import Services from './pages/Services';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Terms from './pages/Terms';

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
