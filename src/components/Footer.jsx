const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-row">
        <div>alex.curiel · 2025</div>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          <a href="#about">ABOUT</a>
          <a href="#projects">WORK</a>
          <a href="#contact">CONTACT</a>
        </div>
        <div className="right">REACT · VITE · TAILWIND · VERCEL</div>
      </div>
    </footer>
  );
};

export default Footer;
