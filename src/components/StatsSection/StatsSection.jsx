import useInView from "../../hooks/useInView";
import useCountUp from "../../hooks/useCountUp";
import { stats } from "../../data/statsData";
import "./StatsSection.css";

function StatItem({ stat, active }) {
  const value = useCountUp(stat.value, { active });

  return (
    <li className="stat">
      <span className="stat__value">
        {value}
        <span className="stat__suffix">{stat.suffix}</span>
      </span>
      <span className="stat__label">{stat.label}</span>
      <span className="stat__caption">{stat.caption}</span>
    </li>
  );
}

export default function StatsSection() {
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <section className="stats section section--alt" ref={ref}>
      <div className="stats__glow" aria-hidden="true" />

      <div className="container">
        <ul className="stats__grid">
          {stats.map((stat) => (
            <StatItem key={stat.id} stat={stat} active={inView} />
          ))}
        </ul>
      </div>
    </section>
  );
}
