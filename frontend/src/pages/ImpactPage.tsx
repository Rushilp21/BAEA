import kapadiaTrophyPresentationCeremony from "../assets/kapadia-trophy-presentation-ceremony.png";
import certificateDistributionCeremony from "../assets/certificate-distribution-ceremony.jpeg";

export function ImpactPage() {
  return (
    <div className="container reveal">
      <h1 className="page-title" style={{ textAlign: "center" }}>Our Impact</h1>
      <p style={{ textAlign: "center", maxWidth: "600px", margin: "0.5rem auto 0px", color: "var(--color-text-light)" }}>Measuring our legacy through cumulative achievements and annual award recognitions.</p>
      <table className="stats-table" aria-label="Cumulative impact statistics of BAEA programs">
        <thead>
          <tr>
            <th>Category</th>
            <th>Cumulative Metrics achieved</th>
            <th>Impact Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Adult Literacy Graduates</strong>
            </td>
            <td>
              <strong>3,920+ Students</strong>
            </td>
            <td>Successfully completed fundamental literacy workshops in Hindi, Marathi, and English.</td>
          </tr>
          <tr>
            <td>
              <strong>Subsidized Extension Students</strong>
            </td>
            <td>
              <strong>17,610+ Enrolments</strong>
            </td>
            <td>Learners trained in conversational foreign languages, personality development, and digital tools.</td>
          </tr>
          <tr>
            <td>
              <strong>Library Visitors &amp; Readers</strong>
            </td>
            <td>
              <strong>521,136+ Attendees</strong>
            </td>
            <td>Visitors using our quiet study areas, borrowing reference resources, and reading daily newspapers.</td>
          </tr>
        </tbody>
      </table>
      <h2 className="h-serif" style={{ textAlign: "center", fontSize: "2.25rem", marginTop: "4rem" }}>Rolling Trophies &amp; Awards</h2>
      <p style={{ textAlign: "center", maxWidth: "600px", margin: "0.5rem auto 0px", color: "var(--color-text-light)" }}>Honoring excellence among our learners and the dedicated service of our teachers.</p>
      <div className="trophies-grid">
        <div className="trophy-card">
          <div className="trophy-content">
            <div className="trophy-icon" aria-hidden="true">🏆</div>
            <h3>Late B.M. Kapadia Trophy</h3>
            <p>Awarded annually to the adult learner showing outstanding academic progress, dedication, and character across our skills-development classrooms.</p>
          </div>
          <img alt="Convocation trophy presentation" loading="lazy" src={kapadiaTrophyPresentationCeremony} />
        </div>
        <div className="trophy-card">
          <div className="trophy-content">
            <div className="trophy-icon" aria-hidden="true">🏆</div>
            <h3>Late Rev. Fr. A. Solagran Trophy</h3>
            <p>Presented to a volunteer educator in recognition of exemplary honorary teaching, social responsibility, and long-term service.</p>
          </div>
          <img alt="Certificate distribution ceremony" loading="lazy" src={certificateDistributionCeremony} />
        </div>
      </div>
    </div>
  );
}
