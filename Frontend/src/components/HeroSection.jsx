import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HeroSection.css"; // Import CSS

const HeroSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
  };

  return (
    <section className="hero-section">
      {/* Background Carousel */}
      <Slider {...settings} className="hero-slider">
        <div>
          <img src="https://img.freepik.com/premium-vector/set-various-kinds-fruit-illustrations_338371-493.jpg?w=1380" alt="Background 1" />
        </div>
        <div>
          <img src="https://img.freepik.com/free-vector/dried-fruits-illustration_98292-6597.jpg?t=st=1740075210~exp=1740078810~hm3eac=b7e06ff54be389f42e259a409803b91e06d39a841acb96f9a31de4f29766cb19&w=826" alt="Background 2" />
        </div>
        <div>
          <img src="https://img.freepik.com/free-vector/social-distance-gym-new-normal_23-2148589214.jpg?t=st=1740075425~exp=1740079025~hmac=ab1afb8c137d50725cd1ee6ec76fe2bd66b71881caf0717611321322d24b7760&w=996" alt="Background 3" />
        </div>
      </Slider>

      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      {/* Hero Content */}
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          Fuel Your Body, <br />
          <span>Nourish Your Life</span>
        </motion.h1>

        <motion.p 
          className="hero-tagline"
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          Unlock your full potential with <strong>PrimeBites</strong>— <br />
          <span>Tailored Nutrition for Every Goal.</span>
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        >
          <Link to="/get-started">
            <motion.button 
              className="hero-btn primary"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Get Started 🚀
            </motion.button>
          </Link>

          <Link to="/learn-more">
            <motion.button 
              className="hero-btn secondary"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Learn More 📖
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
