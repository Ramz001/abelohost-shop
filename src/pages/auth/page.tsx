"use client";

import Gutter from "@shared/ui/gutter";
import { LoginForm } from "./ui/login-form";
import styles from "./auth.module.scss";

const AuthPage = () => {
  return (
    <Gutter>
      <div className={styles.container}>
        <h1 className={styles.title}>Login</h1>
        <LoginForm />
      </div>
    </Gutter>
  );
};

export default AuthPage;
