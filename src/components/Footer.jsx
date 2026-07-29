export default function Footer() {
  return (
    <footer className="footer">
      <div>© {new Date().getFullYear()} GIST Mantra Private Limited. All rights reserved.</div>    
      <div className="dev-credit">
        Developed by <span className="dev-badge">JD</span><span className="dev-name">Softteck</span>
      </div>
    </footer>
  );
}