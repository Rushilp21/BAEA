import { useEffect, useRef, useState } from "react";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import type { CourseFilter } from "./data/courses";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { CoursesPage } from "./pages/CoursesPage";
import { FacilitiesPage } from "./pages/FacilitiesPage";
import { GalleryPage } from "./pages/GalleryPage";
import { HomePage } from "./pages/HomePage";
import { ImpactPage } from "./pages/ImpactPage";
import { SupportPage } from "./pages/SupportPage";

function parseHash(hash: string) {
  const fragment = hash.slice(1);
  const queryStart = fragment.indexOf("?");
  const path = queryStart === -1 ? fragment : fragment.slice(0, queryStart);
  const query = queryStart === -1 ? "" : fragment.slice(queryStart + 1);
  return { path: path || "/", query: new URLSearchParams(query) };
}

export function App() {
  const [hash, setHash] = useState(() => window.location.hash);
  const [menuOpen, setMenuOpen] = useState(false);
  const [category, setCategory] = useState<CourseFilter>("all");
  const main = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleHashChange() {
      setHash(window.location.hash);
      setMenuOpen(false);
      window.scrollTo(0, 0);
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const { path, query } = parseHash(hash);
  const pages = [
    ["/", <HomePage category={category} />],
    ["/about", <AboutPage />],
    ["/courses", <CoursesPage category={category} onCategoryChange={setCategory} />],
    ["/facilities", <FacilitiesPage />],
    ["/impact", <ImpactPage />],
    ["/gallery", <GalleryPage />],
    ["/support", <SupportPage />],
    ["/contact", <ContactPage course={path === "/contact" ? query.get("course") : null} hash={hash} />],
  ] as const;
  const visiblePath = pages.some(([route]) => route === path) ? path : "/";

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <a
        href="#main-content"
        className="skip-link"
        onClick={(event) => {
          event.preventDefault();
          main.current?.focus();
        }}
      >
        Skip to content
      </a>
      <SiteHeader path={path} menuOpen={menuOpen} onMenuToggle={() => setMenuOpen((open) => !open)} />
      <main id="main-content" ref={main} tabIndex={-1} style={{ flexGrow: 1 }}>
        {pages.map(([route, page]) => (
          <div key={route} className="route" data-route={route} hidden={visiblePath !== route}>
            {page}
          </div>
        ))}
      </main>
      <SiteFooter />
    </div>
  );
}
