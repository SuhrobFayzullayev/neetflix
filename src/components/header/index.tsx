import React from "react";
import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";
import styles from "./styles.module.css";

function Header() {
  return (
    <header className={`${styles.header}  fluid`}>
      <div className={styles.headerWrapper}>
        <Link className={styles.logo} href="/">
          <FaPlayCircle /> NETFILMS
        </Link>
        <nav className={styles.navigationMenu}>
          {Array("MOVIES", "SERIES", "KIDS").map((v, i) => (
            <Link href="#" key={i}>
              {v}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export { Header };
