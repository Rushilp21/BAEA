const navigation = [
  ["/", "Home"],
  ["/about", "About"],
  ["/courses", "Courses"],
  ["/facilities", "Facilities"],
  ["/impact", "Impact"],
  ["/gallery", "Gallery"],
  ["/support", "Donate & Support"],
  ["/contact", "Contact"],
] as const;

interface SiteHeaderProps {
  path: string;
  menuOpen: boolean;
  onMenuToggle: () => void;
}

export function SiteHeader({ path, menuOpen, onMenuToggle }: SiteHeaderProps) {
  return (
    <header className="header">
      <div className="header-container">
        <a className="logo-area" href="#/">
          <span className="logo-title">BAEA</span>
          <span className="logo-subtitle">Bombay Adult Education Association</span>
        </a>
        <nav id="nav-menu" className={menuOpen ? "nav-links active" : "nav-links"}>
          {navigation.map(([route, label]) => (
            <a
              key={route}
              href={"#" + route}
              className={path === route ? "nav-link active" : "nav-link"}
              aria-current={path === route ? "page" : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className={menuOpen ? "menu-toggle active" : "menu-toggle"}
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
          aria-label="Toggle Navigation"
          onClick={onMenuToggle}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </div>
    </header>
  );
}
