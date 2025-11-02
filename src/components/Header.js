import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to="/">
        <span>WORK</span>
      </Link>
      <Link to="/">
        <img src="/img/emoji.svg" alt="" />
      </Link>
      <Link to="/about">
        <span>ABOUT</span>
      </Link>
    </header>
  );
};

export default Header;
