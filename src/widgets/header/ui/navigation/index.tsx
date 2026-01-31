import Link from "next/link";
import styles from "./navigation.module.scss";
import Gutter from "@shared/ui/gutter";

const links = [
  { href: "/", label: "Home" },
  { href: "/hot-deals", label: "Hot Deals" },
  { href: "/categories", label: "Categories" },
  { href: "/laptops", label: "Laptops" },
  { href: "/smartphones", label: "Smartphones" },
  { href: "/cameras", label: "Camera" },
  { href: "/accessories", label: "Accessories" },
];

const Navigation = () => {
  return (
    <section className={styles.container}>
      <Gutter>
        <nav className={styles.navigation}>
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </nav>
      </Gutter>
    </section>
  );
};

export default Navigation;
