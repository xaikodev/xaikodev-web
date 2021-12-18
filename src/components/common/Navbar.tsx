import { FC } from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

export const Navbar: FC = (props) => {
  return (
    <nav className={styles.links}>
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
    </nav>
  );
};
