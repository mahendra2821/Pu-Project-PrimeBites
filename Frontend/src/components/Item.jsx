import React, { useEffect, useState } from "react";
import "./Item.css";

const Item = () => {
  const [darkMode, setDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => setDarkMode(mediaQuery.matches);
    
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // ✅ Apply the dark mode class to <body> for the entire website
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  const meals = [
    {
      id: 1,
      name: "Oats & Berries",
      image: "https://img.freepik.com/premium-photo/high-angle-view-food-bowl-table_1048944-3219218.jpg?w=996",
      calories: "150 kcal",
      vitamins: "B6, C",
      protein: "5g",
      carbs: "27g",
    },
    {
      id: 2,
      name: "Grilled Chicken Salad",
      image: "https://img.freepik.com/free-photo/grilled-hicken-salad-with-lettuce-tomato-white-cheese-olives-spices-side-viewjpg_141793-3547.jpg?t=st=1740136313~exp=1740139913~hmac=bea9675b0d2b8a5f59de9e4d5a95819f5f3161f960604eabbabbbe3313a103fb&w=996",
      calories: "250 kcal",
      vitamins: "A, C",
      protein: "30g",
      carbs: "10g",
    },
    {
      id: 3,
      name: "Avocado Toast",
      image: "https://img.freepik.com/free-psd/delicious-avocado-toast-with-radishes-cucumbers_191095-85826.jpg?t=st=1740137596~exp=1740141196~hmac=0bd162138184d580401cad1cb8f8b4a8f18f6c6915d3ff0be4ef5ea60e099010&w=1060",
      calories: "200 kcal",
      vitamins: "E, K",
      protein: "8g",
      carbs: "22g",
    },
    {
      id: 1,
      name: "Oats & Berries",
      image: "https://img.freepik.com/premium-photo/high-angle-view-food-bowl-table_1048944-3219218.jpg?w=996",
      calories: "150 kcal",
      vitamins: "B6, C",
      protein: "5g",
      carbs: "27g",
    },
    {
      id: 2,
      name: "Grilled Chicken Salad",
      image: "https://img.freepik.com/free-photo/grilled-hicken-salad-with-lettuce-tomato-white-cheese-olives-spices-side-viewjpg_141793-3547.jpg?t=st=1740136313~exp=1740139913~hmac=bea9675b0d2b8a5f59de9e4d5a95819f5f3161f960604eabbabbbe3313a103fb&w=996",
      calories: "250 kcal",
      vitamins: "A, C",
      protein: "30g",
      carbs: "10g",
    },
    {
      id: 3,
      name: "Avocado Toast",
      image: "https://img.freepik.com/free-psd/delicious-avocado-toast-with-radishes-cucumbers_191095-85826.jpg?t=st=1740137596~exp=1740141196~hmac=0bd162138184d580401cad1cb8f8b4a8f18f6c6915d3ff0be4ef5ea60e099010&w=1060",
      calories: "200 kcal",
      vitamins: "E, K",
      protein: "8g",
      carbs: "22g",
    },
    {
      id: 1,
      name: "Oats & Berries",
      image: "https://img.freepik.com/premium-photo/high-angle-view-food-bowl-table_1048944-3219218.jpg?w=996",
      calories: "150 kcal",
      vitamins: "B6, C",
      protein: "5g",
      carbs: "27g",
    },
    {
      id: 2,
      name: "Grilled Chicken Salad",
      image: "https://img.freepik.com/free-photo/grilled-hicken-salad-with-lettuce-tomato-white-cheese-olives-spices-side-viewjpg_141793-3547.jpg?t=st=1740136313~exp=1740139913~hmac=bea9675b0d2b8a5f59de9e4d5a95819f5f3161f960604eabbabbbe3313a103fb&w=996",
      calories: "250 kcal",
      vitamins: "A, C",
      protein: "30g",
      carbs: "10g",
    },
    {
      id: 3,
      name: "Avocado Toast",
      image: "https://img.freepik.com/free-psd/delicious-avocado-toast-with-radishes-cucumbers_191095-85826.jpg?t=st=1740137596~exp=1740141196~hmac=0bd162138184d580401cad1cb8f8b4a8f18f6c6915d3ff0be4ef5ea60e099010&w=1060",
      calories: "200 kcal",
      vitamins: "E, K",
      protein: "8g",
      carbs: "22g",
    },
  ];

  return (
    <div className="meal-container">
      {meals.map((meal, index) => (
        <div key={meal.id} className={`meal-item ${index % 2 !== 0 ? "reverse" : ""}`}>
          <div className="meal-image-container">
            <img src={meal.image} alt={meal.name} className="meal-image" />
          </div>
          <div className="meal-info">
            <h3 className="meal-name">{meal.name}</h3>
            <p className="meal-calories"><strong>Calories:</strong> {meal.calories}</p>
            <p className="meal-nutrients"><strong>Vitamins:</strong> {meal.vitamins}</p>
            <p className="meal-nutrients"><strong>Protein:</strong> {meal.protein}</p>
            <p className="meal-nutrients"><strong>Carbs:</strong> {meal.carbs}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Item;
