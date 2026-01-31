"use client";

import styles from "./footer.module.scss";
import Gutter from "@shared/ui/gutter";

interface FooterWidgetProps {
  isAuthenticated?: boolean;
  userEmail?: string;
}

export default function FooterWidget({}: FooterWidgetProps) {
  const isAuth = false;

  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Gutter>
        {isAuth ? <p>{currentYear} | Logged as user</p> : <p>{currentYear}</p>}
      </Gutter>
    </footer>
  );
}
