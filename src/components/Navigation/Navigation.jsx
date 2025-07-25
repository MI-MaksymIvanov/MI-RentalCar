import clsx from "clsx";
import { NavLink } from "react-router-dom";

import css from "./Navigation.module.css";

const getLinkStyle = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

function Navigation() {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <a href="/" className={css.logo} arial-label="Site logo">
          <svg width="102" height="16">
            <use xlinkHref="/sprite.svg#icon-logo-rental-car" />
          </svg>
        </a>
        <ul className={css.navList}>
          <li>
            <NavLink to="/" className={getLinkStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/catalog" className={getLinkStyle}>
              Catalog
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
