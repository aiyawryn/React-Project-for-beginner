import React, { useState } from "react";
import "../style.css";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "This product completely transformed the way I work. It's intuitive and beautifully designed.",
      author: "Samantha Lee",
    },
    {
      quote:
        "I’ve never felt more supported by a team. Their attention to detail is unmatched.",
      author: "Carlos Mendez",
    },
    {
      quote:
        "Reliable, fast, and elegant — exactly what I needed. Highly recommended!",
      author: "Aiko Tanaka",
    },
    {
      quote:
        "The user experience is flawless. Every interaction feels premium.",
      author: "Jordan Smith",
    },
    {
      quote:
        "From onboarding to daily use, everything just works. It’s a joy to use.",
      author: "Fatima Noor",
    },
    {
      quote:
        "Their commitment to quality is evident in every pixel. Truly impressive.",
      author: "Luca Moretti",
    },
    {
      quote:
        "I’ve tried many alternatives, but this one stands out for its simplicity and power.",
      author: "Emily Chen",
    },
    {
      quote:
        "Support was lightning fast and incredibly helpful. I felt heard and valued.",
      author: "Ravi Patel",
    },
    {
      quote:
        "The design language is soft and inviting, yet professional. It feels like home.",
      author: "Noah Williams",
    },
    {
      quote:
        "Every update brings thoughtful improvements. It’s clear they listen to their users.",
      author: "Isabelle Dupont",
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1) % testimonials.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  return (
    <div className="testimonials">
      <div className="testimonials-quote">
        {testimonials[currentIndex].quote}
      </div>
      <div className="testimonials-author">
        -{testimonials[currentIndex].author}
      </div>
      <button onClick={handlePrevClick}>Prev</button>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
}
