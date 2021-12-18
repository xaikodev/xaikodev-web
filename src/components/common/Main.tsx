import { FC } from "react";
import styles from "../../styles/Home.module.css";
import { Navbar } from "./Navbar";

export const Main: FC = (props) => {
  return (
    <main className={styles.main}>
      <Navbar />
      {props.children}
    </main>
  );
};
