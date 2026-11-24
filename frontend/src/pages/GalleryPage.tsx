import { galleryPhotos } from "../data/gallery";

export function GalleryPage() {
  return (
    <div className="container reveal">
      <h1 className="page-title" style={{ textAlign: "center" }}>Historical Photo Archive</h1>
      <p className="subtitle" style={{ textAlign: "center", maxWidth: "600px", margin: "0.5rem auto 0px" }}>Capturing our educational legacy, library spaces, and milestone events over the decades.</p>
      <div className="gallery-grid">
        <GalleryPhotos />
      </div>
    </div>
  );
}

function GalleryPhotos() {
  return galleryPhotos.map(({ image, alt, caption }) => (
    <div className="gallery-item" key={image}>
      <img alt={alt} loading="lazy" src={image} />
      <div className="gallery-caption">{caption}</div>
    </div>
  ));
}
