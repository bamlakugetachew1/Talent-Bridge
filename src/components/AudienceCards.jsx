
import "./AudienceCards.css";

export default function AudienceCards() {
  return (
    <section className="audience-section" id="opportunities">
      <div className="container">
        <div className="audience-heading">
          <span className="eyebrow">ONE PLATFORM, TWO PATHS</span>

          <h2>Where opportunity meets talent</h2>

          <p>
            Whether you're building a team or planning your next
            career move, Talent Bridge helps you take the next step.
          </p>
        </div>

        <div className="audience-grid">
          <article className="audience-card employer-card">
            <div className="audience-card-icon">↗</div>

            <span className="audience-label">FOR EMPLOYERS</span>

            <h3>Build your team with the right people.</h3>

            <p>
              Discover professionals with the skills your business
              needs and make your hiring process simpler.
            </p>

            <a href="#opportunities" className="audience-link">
              Find talent <span aria-hidden="true">→</span>
            </a>
          </article>

          <article className="audience-card talent-card" id="talent">
            <div className="audience-card-icon">◇</div>

            <span className="audience-label">FOR JOB SEEKERS</span>

            <h3>Your next opportunity starts here.</h3>

            <p>
              Highlight your skills and experience, and explore
              opportunities that align with your career goals.
            </p>

            <a href="#talent" className="audience-link">
              Explore opportunities <span aria-hidden="true">→</span>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
