import Icon from "../Icon/Icon";
import "./TestimonialCard.css";

export default function TestimonialCard({ testimonial }) {
  return (
    <figure className="testimonial">
      <span className="testimonial__quote-mark" aria-hidden="true">
        <Icon name="quote" size={30} />
      </span>

      <blockquote className="testimonial__quote">
        <p>{testimonial.quote}</p>
      </blockquote>

      <figcaption className="testimonial__author">
        <span className="testimonial__avatar" aria-hidden="true">
          {testimonial.initials}
        </span>
        <span className="testimonial__meta">
          <span className="testimonial__name">{testimonial.name}</span>
          <span className="testimonial__role">
            {testimonial.role}, {testimonial.company}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
