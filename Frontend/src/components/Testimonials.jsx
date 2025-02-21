import React, { useEffect, useRef } from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const reviews = [
    { name: "Alice", review: "PrimeBites changed my eating habits forever!" },
    { name: "John", review: "The meal plans are fantastic and super easy to follow!" },
    { name: "Emma", review: "A must-have for anyone looking to improve their diet." },
    { name: "Michael", review: "Super easy to use and the meals are delicious!" },
    { name: "Sophia", review: "Helped me achieve my fitness goals effortlessly!" },
  ];

  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 300;
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials">
      <h2 className="title">
        What Our <span className="highlight">Users Say</span>
      </h2>

      <div className="reviews-container" ref={scrollRef}>
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <p className="review-text">
              <span className="scrolling-text">{review.review}</span>
            </p>
            <h3 className="review-author">- {review.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
