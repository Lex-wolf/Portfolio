import { useEffect, useState } from "react";
import logo from "../assets/3.png";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/alejandro-curiel-4a16554a/",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
  {
    href: "https://github.com/Lex-wolf",
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: "https://x.com/MuCepher",
    label: "X",
    icon: FaSquareXTwitter,
  },
  {
    href: "https://www.instagram.com/urban.shaman/",
    label: "Instagram",
    icon: FaInstagram,
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return undefined;
    }

    document.body.style.overflow = "hidden";

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-30 -mx-4 border-b border-white/10 bg-base-dark/80 px-4 backdrop-blur-md sm:-mx-6 sm:px-6 md:-mx-8 md:px-8">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 py-4"
      >
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            closeMenu();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="block rounded-lg p-1 transition-all duration-300 ease-in-out hover:scale-110 focus:outline-none"
        >
          <img className="w-10 sm:w-11" src={logo} alt="Alejandro Curiel logo" />
        </a>

        <div className="hidden items-center gap-3 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] text-base-light/80 transition-colors duration-200 hover:border-accent-cyan hover:text-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-base-dark"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center justify-center gap-1 text-xl sm:text-2xl md:flex">
          {socialLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="block rounded-lg p-2 text-base-light transition-all duration-300 ease-in-out hover:scale-110 hover:text-accent-cyan hover:drop-shadow-lg hover:drop-shadow-accent-cyan/30 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-base-dark"
              >
                <Icon />
              </a>
            );
          })}
        </div>

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav-panel"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="inline-flex items-center justify-center rounded-lg border border-white/10 p-2 text-base-light transition-colors hover:border-accent-cyan hover:text-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-base-dark md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isMenuOpen ? (
        <div className="md:hidden">
          <div className="fixed inset-0 top-[73px] z-20 bg-black/60 backdrop-blur-sm" onClick={closeMenu} />
          <div
            id="mobile-nav-panel"
            className="absolute left-4 right-4 top-[calc(100%-0.25rem)] z-30 rounded-2xl border border-white/10 bg-[#071018]/95 p-5 shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-xl border border-white/10 px-4 py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-base-light transition-colors duration-200 hover:border-accent-cyan hover:text-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-base-dark"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-center gap-2 border-t border-white/10 pt-4 text-xl">
              {socialLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="block rounded-lg p-3 text-base-light transition-all duration-300 ease-in-out hover:text-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-base-dark"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
