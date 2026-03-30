import logo from "../assets/3.png";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useLanguage } from "../context/LanguageContext";

const socialLinkClass =
  "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-lg text-base-light transition-all duration-300 ease-in-out hover:scale-110 hover:text-accent-cyan hover:drop-shadow-lg hover:drop-shadow-accent-cyan/30 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-base-dark sm:h-12 sm:w-12 sm:text-xl md:text-2xl";

const Navbar = () => {
  const { lang, setLang } = useLanguage();

  return (
    <nav
      aria-label="Primary"
      className="mb-10 flex flex-col gap-4 sm:mb-16 sm:flex-row sm:items-center sm:justify-between sm:gap-4 md:mb-20"
    >
      <div className="flex min-w-0 shrink-0 items-center">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="inline-flex items-center rounded-lg p-1 transition-all duration-300 ease-in-out hover:scale-110 focus:outline-none"
        >
          <img
            className="h-9 w-9 object-contain sm:h-10 sm:w-10 md:h-11 md:w-11"
            src={logo}
            alt="Alejandro Curiel logo"
            width={44}
            height={44}
          />
        </a>
      </div>

      <div className="flex min-w-0 flex-wrap items-center justify-center gap-x-2 gap-y-2 sm:justify-end sm:gap-x-1 md:gap-x-2">
        <a
          href="https://www.linkedin.com/in/alejandro-curiel-4a16554a/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className={socialLinkClass}
        >
          <FaLinkedin className="pointer-events-none" aria-hidden />
        </a>

        <a
          href="https://github.com/Lex-wolf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className={socialLinkClass}
        >
          <FaGithub className="pointer-events-none" aria-hidden />
        </a>
        <a
          href="https://x.com/MuCepher"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
          className={socialLinkClass}
        >
          <FaSquareXTwitter className="pointer-events-none" aria-hidden />
        </a>

        <a
          href="https://www.instagram.com/urban.shaman/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className={socialLinkClass}
        >
          <FaInstagram className="pointer-events-none" aria-hidden />
        </a>

        <div
          className="flex shrink-0 rounded-none border border-white/20"
          role="group"
          aria-label="Language"
        >
          <button
            type="button"
            onClick={() => setLang("en")}
            className={`min-h-[44px] min-w-[3.25rem] flex-1 border-0 border-r border-white/20 px-3 py-2 text-xs font-medium uppercase tracking-wider transition-colors focus:outline-none focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-base-dark sm:min-w-[3.5rem] sm:text-sm ${
              lang === "en"
                ? "bg-[#62abae] text-base-dark"
                : "bg-transparent text-neutral-500 hover:text-neutral-300"
            }`}
            aria-pressed={lang === "en"}
            aria-label="English"
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => setLang("es")}
            className={`min-h-[44px] min-w-[3.25rem] flex-1 border-0 px-3 py-2 text-xs font-medium uppercase tracking-wider transition-colors focus:outline-none focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-base-dark sm:min-w-[3.5rem] sm:text-sm ${
              lang === "es"
                ? "bg-[#62abae] text-base-dark"
                : "bg-transparent text-neutral-500 hover:text-neutral-300"
            }`}
            aria-pressed={lang === "es"}
            aria-label="Español"
          >
            ES
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
