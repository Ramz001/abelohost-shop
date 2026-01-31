import Link from "next/link";
import styles from "./navigation.module.scss";
import Gutter from "@shared/ui/gutter";
import { navigationLinks } from "@widgets/header/consts/navigation-links";

const Navigation = () => {
  return (
    <section className={styles.container}>
      <Gutter>
        <nav className={styles.wrapper}>
          {navigationLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </Link>
          ))}
        </nav>
      </Gutter>
    </section>
  );
};

export default Navigation;
