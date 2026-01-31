"use client";

import styles from "./footer.module.scss";
import Gutter from "@shared/ui/gutter";

export default function FooterWidget() {
  const isAuth = false;
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.container}>
      <Gutter>
        {isAuth ? <p>{currentYear} | Logged as user</p> : <p>{currentYear}</p>}
      </Gutter>
    </footer>
  );
}
