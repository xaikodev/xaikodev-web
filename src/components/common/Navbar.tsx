import { FC, useState } from "react";
import Link from "next/link";
import styles from "../../styles/common/navbar.module.css";
import { HamburgerIcon } from "@chakra-ui/icons";

export const Navbar: FC = (props) => {
  const [opened, setOpened] = useState(true);

  const toggle = () => {
    setOpened((op) => !op);
  };

  return (
    <nav className={styles.navbar}>
      <div className={opened ? styles.nav : styles.navClosed}>
        <Link href="/">
          <a className={styles.link}>Home</a>
        </Link>
        <Link href="/bio">
          <a className={styles.link}>Bio</a>
        </Link>
        <Link href="/projects">
          <a className={styles.link}>Projects</a>
        </Link>
        <Link href="/contact">
          <a className={styles.link}>Contact</a>
        </Link>
      </div>
      <HamburgerIcon className={opened ? styles.burger: styles.burgerClosed} onClick={toggle} />
    </nav>
  );
};
