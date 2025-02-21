import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import Testimonials from "./components/Testimonials";
import Features from "./components/Features";
import MealPlans from "./components/MealPlans";
import CTA from "./components/Cta";
import { ThemeProvider } from "./ThemeContext";
import './App.css';
import Faq from "./components/Faq";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <Router> 
        <div className="app">
          <Header />
          
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <Features />
                <MealPlans />
                <Testimonials />
                <CTA />
                <Faq />
                <Footer />
              </>
            } />
            <Route path="/aboutus" element={<AboutUs />} /> 
          </Routes>

        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
