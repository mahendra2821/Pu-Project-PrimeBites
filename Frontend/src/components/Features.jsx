// import React, { useState, useEffect } from "react";
// import { FaAppleAlt, FaLeaf, FaHeartbeat, FaSun, FaMoon } from "react-icons/fa";
// import './Features.css'
// const Features = () => {
//   const [darkMode, setDarkMode] = useState(
//     localStorage.getItem("darkMode") === "true"
//   );

//   useEffect(() => {
//     document.documentElement.classList.toggle("dark", darkMode);
//     localStorage.setItem("darkMode", darkMode);
//   }, [darkMode]);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   const features = [
//     {
//       icon: <FaAppleAlt size={40} />,
//       title: "Healthy Nutrition",
//       desc: "Custom diet plans designed for balanced health.",
//     },
//     {
//       icon: <FaLeaf size={40} />,
//       title: "Fresh Ingredients",
//       desc: "We use high-quality organic ingredients for our meals.",
//     },
//     {
//       icon: <FaHeartbeat size={40} />,
//       title: "Personalized Plans",
//       desc: "Tailored meal plans based on your dietary needs.",
//     },
//   ];

//   return (
//     <section className="features-section">
//       {/* Dark Mode Toggle Button */}
//       <button className="dark-mode-toggle" onClick={toggleDarkMode}>
//         {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
//       </button>

//       {/* Features Content */}
//       <h2 className="features-title">
//         Why Choose <span className="highlight">PrimeBites</span>?
//       </h2>
//       <div className="features-container">
//         {features.map((feature, index) => (
//           <div key={index} className="feature-card">
//             <div className="feature-icon">{feature.icon}</div>
//             <h3 className="feature-title">{feature.title}</h3>
//             <p className="feature-desc">{feature.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Features;


import React from "react";
import { FaAppleAlt, FaLeaf, FaHeartbeat } from "react-icons/fa";
import "./Features.css";

const Features = () => {
  const features = [
    {
      icon: <FaAppleAlt size={40} />,
      title: "Healthy Nutrition",
      desc: "Custom diet plans designed for balanced health.",
    },
    {
      icon: <FaLeaf size={40} />,
      title: "Fresh Ingredients",
      desc: "We use high-quality organic ingredients for our meals.",
    },
    {
      icon: <FaHeartbeat size={40} />,
      title: "Personalized Plans",
      desc: "Tailored meal plans based on your dietary needs.",
    },
  ];

  return (
    <section className="features-section">
      {/* Features Content */}
      <h2 className="features-title">
        Why Choose <span className="highlight">PrimeBites</span>?
      </h2>
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-desc">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
