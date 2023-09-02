import Link from "next/link";
import CopyAppLink from "./copy";

import styles from "./styles/nav.module.css";
import BackIcon from "./back";

export default function Navigation(){
    return <section className={styles.nav}>
        <Link href="/" className={styles.back}>
            <BackIcon />
        </Link>

        <CopyAppLink />

    </section>
}