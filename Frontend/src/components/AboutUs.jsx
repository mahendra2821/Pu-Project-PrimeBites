import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Kisore Kumar",
      role: "Co-Founder & CEO",
      image: "https://cdn.corporatefinanceinstitute.com/assets/ceo-vs-cfo.jpeg", // Replace with actual image URL
    },
    {
      name: "Suchitra",
      role: "Director of Operations",
      image: "https://t3.ftcdn.net/jpg/03/08/94/88/360_F_308948872_JEUvfv5acMTa93v3AqJnrDPHEYdmidXs.jpg", // Replace with actual image URL
    },
    {
      name: "Naeem M",
      role: "Tech Lead",
      image: "https://imageio.forbes.com/specials-images/imageserve/653651737/960x0.jpg?height=473&width=711&fit=bounds", // Replace with actual image URL
    },
    {
      name: "Suchitra",
      role: "Director of Operations",
      image: "https://www.philips.com/c-dam/corporate/en_AA/about/about-us/executive-profile/roy-jakobs/roy-jakobs-ceo-masthead-l.jpg", // Replace with actual image URL
    },
    
  ];

  return (
    <section className="about-us">
      {/* Our Vision */}
      <div className="section vision">
        <h2>Our <span className="highlight">Vision</span></h2>
        <p>We aim to revolutionize the way people approach nutrition by providing personalized meal plans for a healthier future.</p>
      </div>

      {/* Our Mission */}
      <div className="section mission">
        <h2>Our <span className="highlight">Mission</span></h2>
        <p>Empowering individuals to achieve their health goals through expert-designed meal plans, balanced nutrition, and seamless accessibility.</p>
      </div>

      {/* Our Team */}
      <div className="section team">
        <h2>Meet <span className="highlight">Our Team</span></h2>
        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <div className="image-container">
                <img src={member.image} alt={member.name} className="team-image" />
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
