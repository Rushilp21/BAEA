export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-info">
          <h3>Bombay Adult Education Association</h3>
          <p>Providing literacy, skills development, and community library facilities since 1934 in the spirit of dedicated honorary service.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#/about">About Us</a>
            </li>
            <li>
              <a href="#/courses">Courses</a>
            </li>
            <li>
              <a href="#/facilities">Facilities</a>
            </li>
            <li>
              <a href="#/impact">Our Impact</a>
            </li>
            <li>
              <a href="#/support">Donate</a>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact Info</h4>
          <p><strong>Library:</strong> Bai Motibai Wadia Free Reading Room, Byculla, Mumbai</p>
          <p style={{ marginTop: "0.5rem" }}><strong>Phone:</strong> +91 22 2301 1879</p>
          <p><strong>Hours:</strong> Mon–Sat, 10 AM – 6 PM</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p>© 2026 Bombay Adult Education Association. All rights reserved.</p>
          <p>Education in the Spirit of Service.</p>
        </div>
      </div>
    </footer>
  );
}
