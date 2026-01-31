"use client";

import styles from "./footer.module.scss";
import Gutter from "@shared/ui/gutter";

interface FooterWidgetProps {
  isAuthenticated?: boolean;
  userEmail?: string;
}

export default function FooterWidget({
  isAuthenticated = false,
  userEmail,
}: FooterWidgetProps) {
  const currentYear = new Date().getFullYear();

  return (
    <Gutter>
      <footer className={styles.footer}>
        <div className={styles.container}>
          {isAuthenticated && userEmail ? (
            <p>
              {currentYear} | Logged as {userEmail}
            </p>
          ) : (
            <p>{currentYear}</p>
          )}
        </div>
      </footer>
    </Gutter>
  );
}
