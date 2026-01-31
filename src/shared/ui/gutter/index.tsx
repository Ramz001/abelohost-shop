import type { ReactNode } from "react";
import styles from "./gutter.module.scss";

export default function Gutter({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`${styles.gutter} ${className}`}>{children}</div>;
}
