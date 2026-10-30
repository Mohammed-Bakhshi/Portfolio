import "./Hero.css";

export function Hero() {
  return (
    <section className="hero" id="home">
      <h1 className="hero-animate">
        Hi, My name is Mohammed{" "}
        <span className="wave" aria-hidden="true">
          👋
        </span>
      </h1>
      <p className="hero-animate hero-animate-delay">
        Developer with 4 years' experience building TypeScript, React, and Node.js
        web applications — from frontend to API and cloud deployment.
      </p>
    </section>
  );
}
