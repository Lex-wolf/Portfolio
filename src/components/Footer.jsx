const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-row">
        <div>alex.curiel · 2026</div>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          <a href="#about">ABOUT</a>
          <a href="#projects">WORK</a>
          <a href="#contact">CONTACT</a>
        </div>
        <div className="right" style={{ display: "flex", justifyContent: "flex-end", gap: "0.8rem", flexWrap: "wrap" }}>
          <a href="https://github.com" target="_blank" rel="noreferrer">GITHUB</a>
          <a href="https://www.linkedin.com/in/lxcrl/" target="_blank" rel="noreferrer">LINKEDIN</a>
          <a href="https://x.com" target="_blank" rel="noreferrer">X</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">INSTAGRAM</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
