import React from "react";
import "./Faq.css";

const Faq = () => {
  const faqs = [
    { question: "What is PrimeBites?", answer: "PrimeBites offers personalized meal plans to help you achieve your nutritional goals." },
    { question: "How does it work?", answer: "Simply choose your preferences, and we’ll generate a meal plan tailored to your needs." },
    { question: "Are the meal plans customizable?", answer: "Yes! You can adjust your meal plans based on your dietary requirements." },
    { question: "Is PrimeBites suitable for all diets?", answer: "Absolutely! We cater to various diets, including keto, vegan, and high-protein plans." },
  ];

  return (
    <section className="faq">
      <h2 className="faq-title">Frequently Asked <span className="highlight">Questions</span></h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3 className="faq-question">{faq.question}</h3>
            <p className="faq-answer">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
