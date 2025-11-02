import { Link } from 'react-router-dom';
import emoji from '../img/emoji.svg';

const Header = () => {
  return (
    <header>
      <Link to="/">
        <span>WORK</span>
      </Link>
      <Link to="/">
        <img src={emoji} alt="" />
      </Link>
      <Link to="/about">
        <span>ABOUT</span>
      </Link>
    </header>
  );
};

export default Header;
