import logo from "../assets/3.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-12 sm:mb-20 flex items-center justify-between py-4 sm:py-6 px-0">
      <div className="flex flex-shrink-0 items-center">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="block transition-all duration-300 ease-in-out hover:scale-110 focus:outline-none rounded-lg p-1"
        >
          <img className="mx-s w-10" src={logo} alt="logo" />
        </a>
      </div>

      <div className="m-4 sm:m-8 flex items-center justify-center gap-1 text-xl sm:text-2xl">
        <a
          href={"https://www.linkedin.com/in/alejandro-curiel-4a16554a/"}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-base-light hover:text-accent-cyan transition-all duration-300 ease-in-out hover:scale-110 hover:drop-shadow-lg hover:drop-shadow-accent-cyan/30 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-base-dark rounded-lg p-2"
        >
          <FaLinkedin />
        </a>

        <a
          href={"https://github.com/Lex-wolf"}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-base-light hover:text-accent-cyan transition-all duration-300 ease-in-out hover:scale-110 hover:drop-shadow-lg hover:drop-shadow-accent-cyan/30 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-base-dark rounded-lg p-2"
        >
          <FaGithub />
        </a>
        <a
          href={"https://x.com/MuCepher"}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-base-light hover:text-accent-cyan transition-all duration-300 ease-in-out hover:scale-110 hover:drop-shadow-lg hover:drop-shadow-accent-cyan/30 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-base-dark rounded-lg p-2"
        >
          <FaSquareXTwitter />
        </a>

        <a
          href={"https://www.instagram.com/urban.shaman/"}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-base-light hover:text-accent-cyan transition-all duration-300 ease-in-out hover:scale-110 hover:drop-shadow-lg hover:drop-shadow-accent-cyan/30 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-base-dark rounded-lg p-2"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
