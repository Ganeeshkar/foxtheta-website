import { useState } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import Reveal from "../Reveal/Reveal";
import Icon from "../Icon/Icon";
import { testimonials } from "../../data/testimonialsData";
import "./TestimonialsSection.css";

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const go = (next) => setIndex((next + total) % total);

  return (
    <section className="testimonials section">
      <div className="container">
        <SectionHeading
          eyebrow="Client voices"
          title="What working with us is like"
          lead="Placeholder quotes — replace with approved client statements before launch."
        />

        <Reveal className="testimonials__stage">
          <div
            className="testimonials__viewport"
            aria-live="polite"
            aria-roledescription="carousel"
          >
            {testimonials.map((item, i) => (
              <div
                key={item.id}
                className={`testimonials__slide ${
                  i === index ? "is-active" : ""
                }`}
                aria-hidden={i !== index}
              >
                <TestimonialCard testimonial={item} />
              </div>
            ))}
          </div>

          <div className="testimonials__controls">
            <button
              type="button"
              className="testimonials__arrow"
              onClick={() => go(index - 1)}
              aria-label="Previous testimonial"
            >
              <Icon name="chevronRight" size={20} />
            </button>

            <ul className="testimonials__dots">
              {testimonials.map((item, i) => (
                <li key={item.id}>
                  <button
                    type="button"
                    className={`testimonials__dot ${
                      i === index ? "is-active" : ""
                    }`}
                    aria-label={`Show testimonial ${i + 1} of ${total}`}
                    aria-current={i === index}
                    onClick={() => setIndex(i)}
                  />
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="testimonials__arrow"
              onClick={() => go(index + 1)}
              aria-label="Next testimonial"
            >
              <Icon name="chevronRight" size={20} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
