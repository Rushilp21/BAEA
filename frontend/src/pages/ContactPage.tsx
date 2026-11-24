import { useEffect, useState, type FormEvent } from "react";
import enquirySubjects from "../data/enquiry-subjects.json";

export function ContactPage({ course, hash }: { course: string | null; hash: string }) {
  const [subject, setSubject] = useState(course ? "course" : "");
  const [message, setMessage] = useState(course ? courseMessage(course) : "");
  const [sending, setSending] = useState(false);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    if (course) {
      setSubject("course");
      setMessage((current) => current || courseMessage(course));
    }
  }, [course, hash]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;

    const form = event.currentTarget;
    const enquiry = Object.fromEntries(new FormData(form));
    setSending(true);
    setNotice("");

    try {
      const response = await fetch("api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(enquiry),
      });
      const result = await response.json();
      if (!response.ok || result.ok !== true) {
        setNotice(result.error ?? "Your message could not be sent. Please try again.");
        return;
      }

      form.reset();
      setSubject("");
      setMessage("");
      setNotice("Your message was sent. Thank you for contacting BAEA.");
    } catch {
      setNotice("Your message could not be sent. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="container reveal">
      <h1 className="page-title" style={{ textAlign: "center" }}>Get In Touch</h1>
      <p style={{ textAlign: "center", maxWidth: "600px", margin: "0.5rem auto 0px", color: "var(--color-text-light)" }}>Contact us to enroll in courses, volunteer, or request donation channels.</p>
      <div className="contact-grid">
        <div className="info-card">
          <div className="info-item">
            <h2 className="info-heading">Main Library &amp; Center</h2>
            <p>Bai Motibai Wadia Free Reading Room &amp; Library<br />Opposite Byculla Railway Station (East)<br />Byculla, Mumbai - 400027<br />Maharashtra, India</p>
          </div>
          <div className="info-item">
            <h2 className="info-heading">Enquiries &amp; Office Hours</h2>
            <p>Monday to Saturday: 10:00 AM - 6:00 PM<br />Sunday: Closed</p>
            <p style={{ marginTop: "0.75rem" }}><strong>Phone:</strong> +91 22 2301 1879</p>
          </div>
          <div className="info-item">
            <h2 className="info-heading">Service Model</h2>
            <p>As a fully honorary-run organisation, our staff and teachers are volunteers. Please submit a message below and we will get back to you as soon as a volunteer is online.</p>
          </div>
        </div>
        <form className="contact-form" name="contact" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name<span className="required" aria-hidden="true">*</span></label>
            <input id="name" className="form-control" required aria-required="true" type="text" name="name" maxLength={120} disabled={sending} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address<span className="required" aria-hidden="true">*</span></label>
            <input id="email" className="form-control" required aria-required="true" type="email" name="email" maxLength={254} disabled={sending} />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Enquiry Subject<span className="required" aria-hidden="true">*</span></label>
            <select id="subject" name="subject" className="form-control" required aria-required="true" value={subject} disabled={sending} onChange={(event) => setSubject(event.target.value)}>
              <option value="" disabled>Select an enquiry type</option>
              {Object.entries(enquirySubjects).map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message<span className="required" aria-hidden="true">*</span></label>
            <textarea id="message" name="message" className="form-control" required aria-required="true" value={message} maxLength={5000} disabled={sending} onChange={(event) => setMessage(event.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary" disabled={sending} style={{ width: "100%", padding: "0.85rem" }}>
            {sending ? "Sending…" : "Send Message"}
          </button>
          <div role="status">
            {notice && <p style={{ marginTop: "1rem" }}>{notice}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}

function courseMessage(course: string) {
  return "I would like to enquire about the " + course + " course.";
}
