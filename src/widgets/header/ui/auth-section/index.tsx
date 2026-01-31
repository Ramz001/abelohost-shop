"use client";

import { LogOut, LogIn } from "lucide-react";
import styles from "./auth-section.module.scss";
import Link from "next/link";
import { useAuthStore } from "@shared/models/useAuthStore";

export default function AuthSection() {
  const { user, clearUser } = useAuthStore();

  if (user?.id) {
    return (
      <div className={styles.wrapper}>
        <span>
          {user.firstName} {user.lastName}
        </span>
        <button className={styles.button} onClick={clearUser}>
          <LogOut className={styles.icon} />
          Logout
        </button>
      </div>
    );
  }

  return (
    <Link href="/auth" className={styles.button}>
      <LogIn className={styles.icon} />
      Login
    </Link>
  );
}
