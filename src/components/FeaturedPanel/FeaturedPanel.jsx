import { Link } from "react-router-dom";
import Reveal from "../Reveal/Reveal";
import Icon from "../Icon/Icon";
import { platformStats } from "../../data/statsData";
import "./FeaturedPanel.css";

/** PLACEHOLDER sources shown in the retrieval mock. */
const sources = [
  { id: 1, title: "Billing policy v4.2", meta: "§3 proration rules", score: 97 },
  { id: 2, title: "Plan change runbook", meta: "mid-cycle upgrades", score: 94 },
  { id: 3, title: "Ticket #48219", meta: "resolved · same issue", score: 88 },
];

export default function FeaturedPanel() {
  return (
    <section className="featured section">
      <div className="container">
        <Reveal className="featured__panel panel panel--edge">
          <div className="featured__copy">
            <span className="featured__kicker">
              Featured capability · Foxtheta Atlas
            </span>

            <h2 className="featured__title">
              The retrieval layer that makes every other AI feature credible
            </h2>

            <p className="featured__text">
              Atlas is how we build knowledge systems: permission-aware
              retrieval, hybrid search that handles part numbers as well as
              prose, and a citation on every claim. It powers our agents, our
              support copilots and our internal search deployments — and it is
              measured against your own graded question set from week one.
            </p>

            <Link to="/services/rag-knowledge-systems" className="btn btn--primary">
              Explore knowledge systems
              <Icon name="arrow" size={18} className="icon--arrow" />
            </Link>

            <ul className="featured__stats">
              {platformStats.map((stat) => (
                <li key={stat.id}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </li>
              ))}
            </ul>

            <p className="featured__note">
              <Icon name="shield" size={16} />
              Deployable in your cloud, your VPC, or fully on-premise.
            </p>
          </div>

          <div className="featured__visual" aria-hidden="true">
            <div className="atlas">
              <div className="atlas__head">
                <span className="atlas__title">Atlas · retrieval trace</span>
                <span className="atlas__tag">grounded</span>
              </div>

              <div className="atlas__query">
                <Icon name="knowledge" size={16} />
                why was this customer charged twice in march?
              </div>

              <ul className="atlas__sources">
                {sources.map((source, index) => (
                  <li key={source.id} style={{ "--i": index }}>
                    <div className="atlas__source-main">
                      <span className="atlas__source-title">
                        {source.title}
                      </span>
                      <span className="atlas__source-meta">{source.meta}</span>
                    </div>
                    <div className="atlas__score">
                      <span className="atlas__score-value">{source.score}%</span>
                      <span className="atlas__score-track">
                        <span
                          className="atlas__score-fill"
                          style={{ width: `${source.score}%` }}
                        />
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="atlas__answer">
                <span className="atlas__answer-label">Grounded answer</span>
                <p>
                  A mid-cycle plan upgrade generated a proration charge
                  alongside the scheduled invoice.
                </p>
                <span className="atlas__answer-cite">
                  Cited: Billing policy v4.2 §3
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
