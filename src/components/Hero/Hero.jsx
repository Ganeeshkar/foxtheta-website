import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";
import PrecisionScene from "../MotionDiagram/PrecisionScene";
import "./Hero.css";

export default function Hero() {
  return <section className="hero"><div className="container">
    <div className="hero__intro">
      <div className="hero__copy">
        <h1 className="hero__title">AI built for<br />the real world.</h1>
        <p className="hero__lead">Agents, knowledge systems and automation.<br className="hero__desktop-break" /> Built around your business.<br className="hero__desktop-break" /> Ready for the work that matters.</p>
        <div className="hero__actions"><Link to="/contact" className="btn btn--primary">Talk to an engineer <Icon name="arrow" size={16} /></Link><a href="#services" className="btn btn--outline">Explore services <Icon name="arrow" size={16} /></a></div>
      </div>
      <div className="hero__visual"><PrecisionScene /></div>
    </div>
    <div className="hero__footnote"><span><i /> Production-first delivery</span><span><i /> Your code, your infrastructure</span><span><i /> Measured against a real baseline</span></div>
  </div></section>;
}
