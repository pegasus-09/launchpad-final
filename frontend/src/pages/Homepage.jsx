import "./Homepage.css";

export default function Homepage() {
    return (
    <div className="homepage">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-left">launchpad</div>
        <div className="nav-right">
          <a href="/">About</a>
          <a href="/signup">Career Quiz</a>
            <a href="/signup">Resume Builder</a>
          <button className="login-btn" onClick={() => window.location.href = "/login"}>
  Log in
</button>
<button className="signup-btn" onClick={() => window.location.href = "/signup"}>
  Sign up
</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <h1>
          Blast off with <span>Launchpad.</span>
        </h1>
        <p>
          AI career guidance for students choosing their future.
        </p>

        <div className="hero-actions">
          <button className="primary" onClick={() => window.location.href = "/signup"}>
  Let’s go
</button>
          <button className="secondary">Learn more</button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2>Packed with features to help you grow</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="icon">🎯</div>
            <h3>Responsive Career Quiz</h3>
            <p>
              Answer adaptive questions that adjust in real time as
              your interests and strengths become clearer.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon">🧠</div>
            <h3>AI Tailored Insights</h3>
            <p>
              Get personalised guidance that maps your skills,
              preferences, and goals to realistic career paths.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon">📄</div>
            <h3>Instant Resume Builder</h3>
            <p>
              Turn your profile and results into a clear,
              professional resume in minutes.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-it-works">
        <h2>How it works</h2>

        <div className="steps">
          <div className="step">
            <span>1</span>
            <p>Sign up for a free account</p>
          </div>
          <div className="step">
            <span>2</span>
            <p>Take the career assessment</p>
          </div>
          <div className="step">
            <span>3</span>
            <p>Explore your personalised dashboard</p>
          </div>
        </div>
      </section>

      {/* TRY IT OUT */}
      <section className="try">
        <h2>Try it out!</h2>
        <div className="gradient-box" />
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to find your future?</h2>
        <button className="primary" onClick={() => window.location.href = "/signup"}>Sign up</button>
      </section>

      {/* FOOTER */}
      <footer className="footer">launchpad</footer>
    </div>
  );
}
