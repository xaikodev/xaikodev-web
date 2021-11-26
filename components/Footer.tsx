import { FC } from "react";
import styles from "../styles/Home.module.css";
export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2020 , This app is public on <a href={"https://github.com/xaikodev/xaikodev-web"} target="_blank">GitHub</a> feel free to reuse any code</p>
    </footer>
  );
};
