import { FC, useEffect, useState } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Container } from "@chakra-ui/layout";
import { NavLink } from "./NavLink";

import style from "./navbar.module.css";

export const Navbar: FC = () => {
  const [opened, setOpened] = useState(false);
  const toggle = () => setOpened(!opened);
  const [buttonStyle, setButtonStyle] = useState<any>(undefined);
  const [navbarStyle, setNavbarStyle] = useState<any>(undefined);
  useEffect(() => {
    setButtonStyle(opened ? { transform: "rotate(90deg)" } : undefined);
    setNavbarStyle(opened ? { transform: "translateY(-100%)" } : undefined);
  }, [opened]);

  return (
    <nav className={style.navbar}>
      <Container className={style.navLinks} style={navbarStyle}>
        <NavLink link="/" title="Home" />
        <NavLink link="/bio" title="About" />
        <NavLink link="/projects" title="Projects" />
        <NavLink link="/contact" title="Contact" />
      </Container>
      <Container className={style.burger} onClick={toggle}>
        <HamburgerIcon style={buttonStyle} />
      </Container>
    </nav>
  );
};
