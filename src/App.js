import About from './components/About';
import AllInOne from './components/AllInOne';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import Support from './components/Support'
import ContactForm from './components/ContactForm';
import { Element } from 'react-scroll';
import Marketing from './components/Marketing';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Analytics from './components/Analytics';
import DataEngineering from './components/DataEngineering';
import DataScience from './components/DataScience';
import Generative from './components/Generative';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/data-engineering" element={<DataEngineering />} />
          <Route path="/data-science" element={<DataScience />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/services" element={<AllInOne />} />
          <Route path="/generative-ai" element = {<Generative />} />
          <Route path="/contact" element= {<ContactForm/>} />
          {/* Other routes */}
          {/* ... */}
          <Route path = "/analytics" element={<Analytics />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

const Home = () => (
    <>
      <Hero />
      <About />
      <Support />
      <AllInOne />
      <Element name="contact">
        <ContactForm />
      </Element>
  </>
);

export default App;
