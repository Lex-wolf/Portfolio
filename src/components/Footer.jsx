const Footer = ({ path = "/" }) => {
  const onHome = path === "/";
  const sectionHref = (id) => (onHome ? `#${id}` : `/#${id}`);

  return (
    <footer className="footer">
      <div className="container footer-row">
        <div>alex.curiel · 2026</div>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          <a href={sectionHref("about")}>ABOUT</a>
          <a href={sectionHref("projects")}>WORK</a>
          <a href={sectionHref("contact")}>CONTACT</a>
        </div>
        <div className="right" style={{ display: "flex", justifyContent: "flex-end", gap: "0.8rem", flexWrap: "wrap" }}>
          <a href="https://github.com" target="_blank" rel="noreferrer">GITHUB</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LINKEDIN</a>
          <a href="https://x.com" target="_blank" rel="noreferrer">X</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">INSTAGRAM</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
