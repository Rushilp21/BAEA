import studentsStudyingInReadingRoom from "../assets/students-studying-in-reading-room.jpeg";
import libraryInteriorWithBookshelves from "../assets/library-interior-with-bookshelves.jpeg";

export function FacilitiesPage() {
  return (
    <div className="container reveal">
      <h1 className="page-title" style={{ textAlign: "center" }}>Our Facilities</h1>
      <p style={{ textAlign: "center", maxWidth: "600px", margin: "0.5rem auto 0px", color: "var(--color-text-light)" }}>BAEA operates free reading rooms, community libraries, and distributed classroom spaces across Mumbai.</p>
      <div className="facility-showcase">
        <div className="facility-card">
          <div className="facility-info">
            <h2>Bai Motibai Wadia Free Reading Room &amp; Library</h2>
            <p>Established to provide a quiet, resourceful studying space for students and adult learners. It contains thousands of books, academic references, and daily regional language newspapers.</p>
            <div className="facility-meta">
              <span><span aria-hidden="true">🕒</span> Open Daily</span>
              <span><span aria-hidden="true">🔑</span> Free Admission</span>
            </div>
          </div>
          <div className="facility-img" role="img" aria-label="Students studying in the Bai Motibai Wadia reading room" style={{ backgroundImage: "url(" + studentsStudyingInReadingRoom + ")" }} />
        </div>
        <div className="facility-card">
          <div className="facility-info">
            <h2>Distributed Classroom Centres</h2>
            <p>We run evening language classes, vocational coaching, and adult literacy drives at Bai Motibai Wadia Free Reading Room &amp; Library, Byculla.</p>
            <div className="facility-meta">
              <span><span aria-hidden="true">🕒</span> Evening Batches</span>
              <span><span aria-hidden="true">📖</span> Subsidized Fees</span>
            </div>
          </div>
          <div className="facility-img" role="img" aria-label="Library interior at K.R. Cama Oriental Institute, Colaba" style={{ backgroundImage: "url(" + libraryInteriorWithBookshelves + ")" }} />
        </div>
      </div>
    </div>
  );
}
