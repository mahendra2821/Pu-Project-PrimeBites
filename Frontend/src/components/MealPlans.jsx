import React from "react";
import "./MealPlans.css";

const MealPlans = () => {
  const plans = [
    { name: "Basic Plan", price: "$19.99/mo", details: "Includes weekly meal guides with healthy options." },
    { name: "Pro Plan", price: "$39.99/mo", details: "Customized meal plans with calorie tracking." },
    { name: "Premium Plan", price: "$59.99/mo", details: "Personalized dietitian support & grocery list." },
  ];

  return (
    <section className="meal-plans">
      <h2 className="title">
        Our <span className="highlight">Meal Plans</span>
      </h2>

      <div className="plans-container">
        {plans.map((plan, index) => (
          <div key={index} className="plan-card">
            <h3 className="plan-name">{plan.name}</h3>
            <p className="price">{plan.price}</p>
            <p className="details">{plan.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MealPlans;
