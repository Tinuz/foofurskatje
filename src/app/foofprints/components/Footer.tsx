const Footer = () => (
  <footer
    className="w-full py-4 text-center text-sm mt-8 shadow"
    style={{
      background: "rgba(255,247,224,0.95)",
      boxShadow: "0 -4px 24px #d2b77c55",
      borderTop: "2px solid #d2b77c",
      color: "#3a2f1b",
      fontFamily: '"Inter", system-ui, sans-serif',
    }}
  >
    &copy; {new Date().getFullYear()} Foofprints
  </footer>
);

export default Footer;