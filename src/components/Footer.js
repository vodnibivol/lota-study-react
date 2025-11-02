import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-spacer"></div>

      <div className="footer-content">
        <div className="footer-links">
          <div className="links-left">
            <Link to="/">Email</Link>
            <Link to="/">Resume</Link>
          </div>
          <div className="links-right">
            <Link to="/">LinkedIn</Link>
            <Link to="/">Work Archive</Link>
            <Link to="/">Dribble</Link>
          </div>
        </div>

        <div className="email-container">
          <h1 className="email">lotanidi @gmail.com</h1>
          <button className="copy">
            <img src="/img/copy.svg" alt="copy" />
            <span>Copy</span>
          </button>
        </div>

        <div className="footer">
          <div className="footer-left">© 2025 Anidi Lota</div>
          <div className="footer-right">V0.1 • A WIP Portfolio</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
