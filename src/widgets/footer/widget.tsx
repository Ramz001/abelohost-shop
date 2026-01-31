"use client";

import { useAuthStore } from "@shared/models/useAuthStore";
import styles from "./footer.module.scss";
import Gutter from "@shared/ui/gutter";

export default function FooterWidget() {
  const { user } = useAuthStore();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.container}>
      <Gutter>
        {user?.id ? (
          <p>
            {currentYear} | Logged as {user.firstName} {user.lastName}
          </p>
        ) : (
          <p>{currentYear}</p>
        )}
      </Gutter>
    </footer>
  );
}
