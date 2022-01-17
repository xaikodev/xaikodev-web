import { FC } from "react";
import { NavLink } from "./NavLink";

import style from "./navbar.module.css";

export const Navbar: FC = () => {

  return (
    <nav className={style.navbar}>
        <NavLink link="/" title="Home" />
        <NavLink link="/swax" title="Swax" />
        <NavLink link="/bio" title="About" />
        <NavLink link="/projects" title="Projects" />
        <NavLink link="/contact" title="Contact" />
    </nav>
  );
};
