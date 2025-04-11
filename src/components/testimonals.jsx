import React from "react";
import "../style/testimonals.css";

const TestimonialCard = ({ name, date, title, text }) => {
  return (
    <div className="testimonial-card">
      <div className="top-container">
        <div className="profile-main">
          <div className="profile-circle"/>
          <div className="name">{name}</div>
        </div>
        <div className="menu">⋮</div>
      </div>

      <div className="rating">
        <span className="stars">★★★★★</span>
        <span className="date">{date}</span>
      </div>

      <div className="testimonial-text">
        <p><strong>{title}</strong></p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
