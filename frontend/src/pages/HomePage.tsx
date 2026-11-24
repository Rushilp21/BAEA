import { CourseList } from "../components/CourseList";
import { featuredCourses, type CourseFilter } from "../data/courses";

export function HomePage({ category }: { category: CourseFilter }) {
  return (
    <div>
      <section className="hero">
        <div className="hero-content container reveal active">
          <h1>Education in the Spirit of Service</h1>
          <p>Empowering adults, factory workers, and communities across Mumbai with literacy, professional skills, and free public library systems since 1934.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#/courses">Explore 38+ Courses</a>
            <a className="btn btn-accent" href="#/support">Support Our Mission</a>
          </div>
        </div>
      </section>
      <section className="impact-strip">
        <div className="container strip-grid">
          <div className="strip-item">
            <span className="num">90+</span>
            <span className="lbl">Years of Service</span>
          </div>
          <div className="strip-item">
            <span className="num">521k+</span>
            <span className="lbl">Library Visitors</span>
          </div>
          <div className="strip-item">
            <span className="num">17k+</span>
            <span className="lbl">Extension Students</span>
          </div>
          <div className="strip-item">
            <span className="num">3.9k+</span>
            <span className="lbl">Literacy Graduates</span>
          </div>
        </div>
      </section>
      <section className="container welcome reveal">
        <div className="welcome-grid">
          <div className="welcome-text">
            <h2 className="section-title">Serving Mumbai Since 1934</h2>
            <p>The Bombay Adult Education Association was founded with the active support of Bombay University Vice-Chancellor <strong>Dr. John Mackenzie</strong> and <strong>Sir Rustom P. Masani</strong>. Over nine decades, our volunteer-led educators have dedicated themselves to bridging the literacy and skills gap on a shoestring budget.</p>
            <a className="btn btn-primary" href="#/about" style={{ marginTop: "1.5rem" }}>Read Our Full History</a>
          </div>
          <div className="welcome-card">
            <h3>Our Core Philosophy</h3>
            <p>All of our teachers teach in an <strong>honorary capacity</strong> with no compensation, keeping course fees ridiculously low and accessible for workers and poor communities.</p>
          </div>
        </div>
      </section>
      <section className="featured-section">
        <div className="container reveal">
          <h2 className="section-title" style={{ textAlign: "center" }}>Featured Classes</h2>
          <div className="courses-grid" style={{ marginTop: "3rem" }}>
            <CourseList courses={featuredCourses} category={category} />
          </div>
        </div>
      </section>
      <section className="donation-banner text-center reveal">
        <div className="container">
          <h2>Help Us Preserve Our 1934 Legacy</h2>
          <p>Operating on generous grants, we depend heavily on generous donations to maintain our libraries and courses.</p>
          <a className="btn btn-accent" href="#/support" style={{ marginTop: "1.5rem" }}>Donate to BAEA</a>
        </div>
      </section>
    </div>
  );
}
