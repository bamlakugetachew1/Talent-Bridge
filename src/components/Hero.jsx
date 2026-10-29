import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            A better way to connect talent
          </div>

          <h1>
            Connect. Hire.
            <br />
            <span>Grow together.</span>
          </h1>

          <p className="hero-description">
            Talent Bridge Ethiopia brings employers and job seekers together —
            making it easier to discover opportunities, find the right people,
            and build a stronger workforce.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#opportunities">
              Find opportunities <span>→</span>
            </a>

            <a className="button button-secondary" href="#talent">
              Find talent <span>↗</span>
            </a>
          </div>

          <div className="hero-proof">
            <div className="avatar-stack" aria-hidden="true">
              <span className="avatar avatar-one">B</span>
              <span className="avatar avatar-two">M</span>
              <span className="avatar avatar-three">A</span>
              <span className="avatar avatar-four">+</span>
            </div>

            <p>
              <strong>Talent meets opportunity</strong>
              <span>One connection at a time</span>
            </p>
          </div>
        </div>

        <div
          className="hero-art"
          role="img"
          aria-label="Illustration representing people connecting through Talent Bridge"
        >
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-spark spark-one">✦</div>
          <div className="art-spark spark-two">✦</div>

          <div className="floating-card profile-card">
            <div className="profile-avatar">T</div>
            <div>
              <strong>Top talent</strong>
              <span>Skills that make a difference</span>
            </div>
            <span className="status-dot" />
          </div>

          <div className="illustration-person person-back">
            <div className="person-hair" />
            <div className="person-head" />
            <div className="person-neck" />
            <div className="person-body">
              <span className="person-shirt-detail" />
            </div>
            <div className="person-arm" />
          </div>

          <div className="illustration-person person-front">
            <div className="person-hair" />
            <div className="person-head" />
            <div className="person-neck" />
            <div className="person-body">
              <span className="person-shirt-detail" />
            </div>
            <div className="person-arm" />
          </div>

          <div className="floating-card opportunity-card">
            <span className="opportunity-icon">✓</span>
            <div>
              <strong>New opportunity</strong>
              <span>A great match starts here</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
