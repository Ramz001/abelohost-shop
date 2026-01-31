import { LogOut, LogIn } from "lucide-react";
import styles from "./auth-section.module.scss";

export default function AuthSection() {
  const isLogin = false;

  if (isLogin) {
    return (
      <div className={styles.container}>
        <span className={styles.user}>User Name</span>
        <button className={styles.button}>
          <LogOut className={styles.icon} />
          Logout
        </button>
      </div>
    );
  }

  return (
    <button className={styles.button}>
      <LogIn className={styles.icon} />
      Login
    </button>
  );
}
