export function AboutPage() {
  return (
    <div>
      <section className="container reveal">
        <h1 className="page-title">Our Story</h1>
        <div className="about-grid">
          <div className="about-narrative">
            <p className="lead-text">Founded in 1934, the Bombay Adult Education Association (BAEA) has been a pioneer in non-formal education, literacy campaigns, and community empowerment in Mumbai.</p>
            <p>The association was established under the leadership of prominent visionaries, including Bombay University Vice-Chancellor <strong>Dr. John Mackenzie</strong> and <strong>Sir Rustom P. Masani</strong>. Since its inception, our mission has been fueled by the spirit of dedicated honorary service.</p>
            <h2 style={{ margin: "2.5rem 0px 1rem" }}>Aims &amp; Objectives</h2>
            <ul className="aims-list">
              <li>To promote adult education and literacy among the underprivileged populations of Mumbai.</li>
              <li>To organize subsidized skills-development and language classes to improve employment opportunities.</li>
              <li>To maintain community libraries and free reading rooms to foster lifelong reading habits.</li>
              <li>To run extension lectures and educational programs for factory workers and adult learners.</li>
            </ul>
          </div>
          <div className="sidebar">
            <div className="sidebar-box">
              <h3>Honorary Service</h3>
              <p>All of our teachers, organizers, and managing committee members serve in an entirely honorary capacity. This commitment ensures that over 90% of our funds go directly toward educational resources and maintaining libraries.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="council-section">
        <div className="container reveal">
          <h2 className="section-title text-center">Managing Council</h2>
          <p className="council-subtitle">Guided by our dedicated leadership committee committing to honorary public service.</p>
          <div className="council-grid">
            <div className="council-card">
              <h3>Prof. Ganapat S. Jambhekar</h3>
              <p className="role">President</p>
            </div>
            <div className="council-card">
              <h3>Mr. Kiran Kakatkar</h3>
              <p className="role">Vice President</p>
            </div>
            <div className="council-card">
              <h3>Mr. Rajan Chachad</h3>
              <p className="role">General Secretary</p>
            </div>
            <div className="council-card">
              <h3>Mr. Nalla Sekharan</h3>
              <p className="role">Treasurer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
