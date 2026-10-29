
import "./CTASection.css";

export default function CTASection() {
  return (
    <section className="cta-section" id="about">
      <div className="container">
        <div className="cta-panel">
          <div className="cta-content">
            <span className="cta-eyebrow">YOUR NEXT CHAPTER STARTS HERE</span>

            <h2>Great opportunities begin with the right connection.</h2>

            <p>
              Whether you're hiring or looking for your next role,
              Talent Bridge Ethiopia brings talent and opportunity closer.
            </p>

            <div className="cta-actions">
              <a href="#opportunities" className="cta-button cta-button-light">
                Find talent <span aria-hidden="true">→</span>
              </a>

              <a href="#talent" className="cta-button cta-button-outline">
                Explore opportunities
              </a>
            </div>
          </div>

          <div className="cta-decoration" aria-hidden="true">
            <div className="cta-orbit cta-orbit-one" />
            <div className="cta-orbit cta-orbit-two" />
            <div className="cta-orbit cta-orbit-three" />
            <div className="cta-center-mark">TB</div>
          </div>
        </div>
      </div>
    </section>
  );
}
