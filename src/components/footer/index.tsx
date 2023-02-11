import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link
        href="https://www.linkedin.com/in/suhrob-fayzullayev"
        target="_blank"
      >
        Suhrob Fayzullayev
      </Link>
    </footer>
  );
}
