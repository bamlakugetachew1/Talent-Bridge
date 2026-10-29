import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <a
            className="footer-brand brand"
            href="#home"
            aria-label="Talent Bridge Ethiopia home"
          >
            <span className="brand-mark" aria-hidden="true">
              <span />
              <span />
            </span>

            <span className="brand-name">
              Talent Bridge <strong>Ethiopia</strong>
            </span>
          </a>

          <p className="footer-description">
            Connecting Ethiopian talent with meaningful opportunities
            and helping employers find the people they need.
          </p>

          <nav className="footer-links" aria-label="Footer navigation">
            <a href="#home">Home</a>
            <a href="#opportunities">Opportunities</a>
            <a href="#talent">Talent Pool</a>
            <a href="#how-it-works">How it works</a>
            <a href="#about">About</a>
          </nav>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Talent Bridge Ethiopia.
            All rights reserved.
          </p>

          <a href="#home" className="footer-back-top">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
