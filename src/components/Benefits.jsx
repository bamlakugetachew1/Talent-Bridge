
import "./Benefits.css";

const benefits = [
  {
    icon: "◎",
    color: "benefit-blue",
    title: "Find the right talent",
    description: "Discover professionals with relevant skills.",
  },
  {
    icon: "↗",
    color: "benefit-purple",
    title: "Explore opportunities",
    description: "Find roles across different industries.",
  },
  {
    icon: "◇",
    color: "benefit-green",
    title: "Privacy matters",
    description: "Candidate information deserves care.",
  },
  {
    icon: "⇄",
    color: "benefit-orange",
    title: "Built for both sides",
    description: "A simpler path from search to connection.",
  },
];

export default function Benefits() {
  return (
    <section className="benefits-section" aria-label="Platform benefits">
      <div className="container benefits-grid">
        {benefits.map((benefit) => (
          <article className="benefit-item" key={benefit.title}>
            <div className={`benefit-icon ${benefit.color}`} aria-hidden="true">
              {benefit.icon}
            </div>

            <div>
              <h2>{benefit.title}</h2>
              <p>{benefit.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
