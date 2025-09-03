import "../styles/Hero.css";

export default function Hero() {
  const scrollTo = (id) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="hero" data-testid="section-hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title" data-testid="text-hero-title">
          Transform Your Business Today
        </h1>
        <p className="hero-subtitle" data-testid="text-hero-subtitle">
          Innovative solutions that drive growth, efficiency, and success for
          forward-thinking companies worldwide.
        </p>
        <div className="hero-buttons">
          <button
            onClick={() => scrollTo("#contact")}
            className="btn-primary"
            data-testid="button-get-started"
          >
            Get Started
          </button>
          <button
            onClick={() => scrollTo("#features")}
            className="btn-secondary"
            data-testid="button-learn-more"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
