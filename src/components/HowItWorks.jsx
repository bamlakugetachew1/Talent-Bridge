
import "./HowItWorks.css";

const steps = [
  {
    number: "01",
    title: "Create your profile",
    description:
      "Showcase your skills and experience, or identify the talent your business needs.",
  },
  {
    number: "02",
    title: "Discover a match",
    description:
      "Explore professionals or opportunities that align with your goals.",
  },
  {
    number: "03",
    title: "Connect and grow",
    description:
      "Bring employers and job seekers closer to the right opportunities.",
  },
];

export default function HowItWorks() {
  return (
    <section className="how-section" id="how-it-works">
      <div className="container">
        <div className="how-heading">
          <span className="eyebrow">SIMPLE BY DESIGN</span>
          <h2>From searching to connecting</h2>
          <p>
            A straightforward way to bring talent and opportunity together.
          </p>
        </div>

        <div className="how-grid">
          {steps.map((step) => (
            <article className="how-step" key={step.number}>
              <span className="how-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
