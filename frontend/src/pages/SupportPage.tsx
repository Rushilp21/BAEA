import studentsGroupPhoto from "../assets/students-group-photo.jpeg";

export function SupportPage() {
  return (
    <div className="container reveal">
      <h1 className="page-title" style={{ textAlign: "center" }}>Support Our Mission</h1>
      <p style={{ textAlign: "center", maxWidth: "600px", margin: "0.5rem auto 0px", color: "var(--color-text-light)" }}>Your generous support keeps our libraries free and our course fees affordable for underprivileged learners.</p>
      <div className="support-layout">
        <div>
          <div className="donation-details">
            <h2>VIA Donation</h2>
            <p style={{ marginTop: "1rem", marginBottom: "2rem", lineHeight: "1.7" }}>Details about donation methods and channels will be updated soon. Please contact our office for current donation information.</p>
            <a className="btn btn-primary" href="#/contact">Contact Office</a>
          </div>
          <div className="donation-details" style={{ marginTop: "2rem" }}>
            <h2>VIA Membership</h2>
            <p style={{ marginTop: "1rem", marginBottom: "1.5rem", lineHeight: "1.7" }}>Support BAEA by becoming a member. Choose from the following membership tiers:</p>
            <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
              <div className="membership-tier">
                <h3>Annual Membership</h3>
                <p className="membership-price">Rs. 1,000</p>
                <p className="membership-period">Per year</p>
              </div>
            </div>
          </div>
          <div className="gallery-item" style={{ marginTop: "2rem" }}>
            <img alt="Students group photo" loading="lazy" src={studentsGroupPhoto} />
            <div className="gallery-caption">A batch of BAEA adult learners with their teacher</div>
          </div>
        </div>
        <div>
          <h2 className="h-serif">Partner Trusts</h2>
          <p style={{ color: "var(--color-text-light)" }}>Philanthropic trusts supporting our educational and operational expenses:</p>
          <div className="trusts-grid">
            <div className="trust-card">N.M. Wadia Charities</div>
            <div className="trust-card">Sarvajanik Seva Trust</div>
            <div className="trust-card">Mahalaxmi Temple Trust</div>
            <div className="trust-card">Banajee Charities</div>
          </div>
        </div>
      </div>
    </div>
  );
}
