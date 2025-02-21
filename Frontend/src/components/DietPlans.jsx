import React, { useEffect, useState } from "react";
import "./DietPlans.css";

const dietPlans = [
  {
    title: "Weight Loss Plan",
    description: "A balanced low-calorie meal plan designed to help you shed extra weight while staying energetic.",
    img: "https://img.freepik.com/free-vector/people-healthy-food_24908-55173.jpg?t=st=1740134348~exp=1740137948~hmac=8301d6c574d59e73852994a9a9ef99d4c99d574e75b4f1e6c989d500cd837d40&w=1060",
  },
  {
    title: "Muscle Gain Plan",
    description: "High-protein meals tailored for muscle growth, strength, and recovery after workouts.",
    img: "https://img.freepik.com/premium-vector/healthy-man-athletic-weight-food-diet_18591-6424.jpg?w=1060",
  },
  {
    title: "Vegan Plan",
    description: "A fully plant-based diet ensuring all essential nutrients for a healthy and ethical lifestyle.",
    img: "https://img.freepik.com/free-vector/gradient-illustration-world-vegan-day-celebration_23-2150868797.jpg?t=st=1740134451~exp=1740138051~hmac=e8da4688e766e0a89f3e61d7a74c10b6c688253964d49c8dbaaf7e7aaf7da89b&w=1060",
  },
  {
    title: "Keto Plan",
    description: "A low-carb, high-fat meal plan to help your body enter ketosis for effective fat burning.",
    img: "https://img.freepik.com/free-vector/eating-healthy-food-concept-illustration_114360-2407.jpg?t=st=1740134523~exp=1740138123~hmac=458e0260cde18fb7b5504bcd2cf69bbd7d29125565533d7625c1103c6323377d&w=1060",
  },
  {
    title: "Balanced Diet",
    description: "A well-rounded diet including all essential nutrients for maintaining a healthy lifestyle.",
    img: "https://img.freepik.com/free-vector/healthy-eating-advertising-poster-with-young-woman-holding-green-apple-useful-food-elements_1284-28271.jpg?t=st=1740134576~exp=1740138176~hmac=3db42f885d8555a011bc9644634cad71aa1c4d862c95c6c999ac794f293d2f0e&w=900",
  },
  {
    title: "Muscle Gain Plan",
    description: "High-protein meals tailored for muscle growth, strength, and recovery after workouts.",
    img: "https://img.freepik.com/premium-vector/healthy-man-athletic-weight-food-diet_18591-6424.jpg?w=1060",
  },
  {
    title: "Vegan Plan",
    description: "A fully plant-based diet ensuring all essential nutrients for a healthy and ethical lifestyle.",
    img: "https://img.freepik.com/free-vector/gradient-illustration-world-vegan-day-celebration_23-2150868797.jpg?t=st=1740134451~exp=1740138051~hmac=e8da4688e766e0a89f3e61d7a74c10b6c688253964d49c8dbaaf7e7aaf7da89b&w=1060",
  },
  {
    title: "Keto Plan",
    description: "A low-carb, high-fat meal plan to help your body enter ketosis for effective fat burning.",
    img: "https://img.freepik.com/free-vector/eating-healthy-food-concept-illustration_114360-2407.jpg?t=st=1740134523~exp=1740138123~hmac=458e0260cde18fb7b5504bcd2cf69bbd7d29125565533d7625c1103c6323377d&w=1060",
  },
  {
    title: "Balanced Diet",
    description: "A well-rounded diet including all essential nutrients for maintaining a healthy lifestyle.",
    img: "https://img.freepik.com/free-vector/healthy-eating-advertising-poster-with-young-woman-holding-green-apple-useful-food-elements_1284-28271.jpg?t=st=1740134576~exp=1740138176~hmac=3db42f885d8555a011bc9644634cad71aa1c4d862c95c6c999ac794f293d2f0e&w=900",
  },
  {
    title: "Muscle Gain Plan",
    description: "High-protein meals tailored for muscle growth, strength, and recovery after workouts.",
    img: "https://img.freepik.com/premium-vector/healthy-man-athletic-weight-food-diet_18591-6424.jpg?w=1060",
  },
  {
    title: "Vegan Plan",
    description: "A fully plant-based diet ensuring all essential nutrients for a healthy and ethical lifestyle.",
    img: "https://img.freepik.com/free-vector/gradient-illustration-world-vegan-day-celebration_23-2150868797.jpg?t=st=1740134451~exp=1740138051~hmac=e8da4688e766e0a89f3e61d7a74c10b6c688253964d49c8dbaaf7e7aaf7da89b&w=1060",
  },
  {
    title: "Keto Plan",
    description: "A low-carb, high-fat meal plan to help your body enter ketosis for effective fat burning.",
    img: "https://img.freepik.com/free-vector/eating-healthy-food-concept-illustration_114360-2407.jpg?t=st=1740134523~exp=1740138123~hmac=458e0260cde18fb7b5504bcd2cf69bbd7d29125565533d7625c1103c6323377d&w=1060",
  },
  {
    title: "Balanced Diet",
    description: "A well-rounded diet including all essential nutrients for maintaining a healthy lifestyle.",
    img: "https://img.freepik.com/free-vector/healthy-eating-advertising-poster-with-young-woman-holding-green-apple-useful-food-elements_1284-28271.jpg?t=st=1740134576~exp=1740138176~hmac=3db42f885d8555a011bc9644634cad71aa1c4d862c95c6c999ac794f293d2f0e&w=900",
  },
  {
    title: "Vegan Plan",
    description: "A fully plant-based diet ensuring all essential nutrients for a healthy and ethical lifestyle.",
    img: "https://img.freepik.com/free-vector/gradient-illustration-world-vegan-day-celebration_23-2150868797.jpg?t=st=1740134451~exp=1740138051~hmac=e8da4688e766e0a89f3e61d7a74c10b6c688253964d49c8dbaaf7e7aaf7da89b&w=1060",
  },
  {
    title: "Keto Plan",
    description: "A low-carb, high-fat meal plan to help your body enter ketosis for effective fat burning.",
    img: "https://img.freepik.com/free-vector/eating-healthy-food-concept-illustration_114360-2407.jpg?t=st=1740134523~exp=1740138123~hmac=458e0260cde18fb7b5504bcd2cf69bbd7d29125565533d7625c1103c6323377d&w=1060",
  },
  {
    title: "Balanced Diet",
    description: "A well-rounded diet including all essential nutrients for maintaining a healthy lifestyle.",
    img: "https://img.freepik.com/free-vector/healthy-eating-advertising-poster-with-young-woman-holding-green-apple-useful-food-elements_1284-28271.jpg?t=st=1740134576~exp=1740138176~hmac=3db42f885d8555a011bc9644634cad71aa1c4d862c95c6c999ac794f293d2f0e&w=900",
  },
];

const DietPlans = () => {
  // Detect dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.body.classList.contains("dark-mode"));
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`diet-plans ${isDarkMode ? "dark" : "light"}`}>
      <h2 className="section-title">Choose Your <span className="highlight">Diet Plan</span></h2>
      <div className="plans-container">
        {dietPlans.map((plan, index) => (
          <div key={index} className="plan-card">
            <div className="image-container">
              <img src={plan.img} alt={plan.title} className="plan-image" />
            </div>
            <h3 className="plan-title">{plan.title}</h3>
            <p className="plan-description">{plan.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DietPlans;
