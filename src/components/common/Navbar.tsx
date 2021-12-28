import { CSSProperties, FC, useState } from "react";
import Link from "next/link";
import styles from "../../styles/common/navbar.module.css";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { transition } from "@chakra-ui/styled-system";
import { Container } from "@chakra-ui/layout";

export const Navbar: FC = (props) => {
  const [opened, setOpened] = useState(false);
  const router = useRouter();
  console.log(router.asPath);
  const toggle = () => {
    setOpened((op) => !op);
  };

  const activeLink: (location: string) => CSSProperties = (
    location: string
  ) => {
    return router.asPath === location
      ? {
          color: "blue",
          transition: "all 0.3s ease-out",
          transform: "scale(1.5)",
          webkitTransform: "scale(1.5)",
        }
      : { color: "black", transition: "all 0.3s ease-out" };
  };

  return (
    <nav className={styles.navbar}>
      <Container className={opened ? styles.nav : styles.navClosed}>
        <Link href="/">
          <p className={styles.link} style={activeLink("/")}>
            Home
          </p>
        </Link>
        <Link href="/bio">
          <p className={styles.link} style={activeLink("/bio")}>
            Bio
          </p>
        </Link>
        <Link href="/projects">
          <p className={styles.link} style={activeLink("/projects")}>
            Projects
          </p>
        </Link>
        <Link href="/contact">
          <p className={styles.link} style={activeLink("/contact")}>
            Contact
          </p>
        </Link>
      </Container>
      <HamburgerIcon
        className={opened ? styles.burger : styles.burgerClosed}
        onClick={toggle}
      />
    </nav>
  );
};
