import { NavLink } from 'react-router-dom';
import s from './header.module.scss';

const getLinkClassName = ({ isActive }) => {
  return isActive ? s.linkActive : s.link;
};

const Header = () => {
  return (
    <header className={s.header}>
      <nav>
        <ul className={s.navList}>
          <li className={s.navItem}>
            <NavLink className={getLinkClassName} to="/">
              Home
            </NavLink>
          </li>
          <li className={s.navItem}>
            <NavLink className={getLinkClassName} to="/movies">
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
