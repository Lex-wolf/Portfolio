import logo from "../assets/2.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex item-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-s w-10" src={logo} alt="logo" />
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href={"https://www.linkedin.com/in/alejandro-curiel-4a16554a/"}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <FaLinkedin />
        </a>

        <a
          href={"https://github.com/Lex-wolf"}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <FaGithub />
        </a>
        <a
          href={"https://x.com/MuCepher"}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <FaSquareXTwitter />
        </a>

        <a
          href={"https://www.instagram.com/urban.shaman/"}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
