import { FC } from "react"
import styles from "../styles/Home.module.css";

export const Main: FC = (props) => {
    return (
        <main className={styles.main}>
            {props.children}
        </main>
    )
}
