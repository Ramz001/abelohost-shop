import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import styles from "./contacts.module.scss";

const links = [
  {
    href: "tel:+021955184",
    icon: Phone,
    text: "+021-95-51-84",
  },
  {
    href: "mailto:shop@abelohost.com",
    icon: Mail,
    text: "shop@abelohost.com",
  },
  {
    href: "https://goo.gl/maps/xyz",
    icon: MapPin,
    text: "1734 Stonecoal Road",
  },
];

const Contacts = () => {
  return (
    <section className={styles.wrapper}>
      {links.map(({ href, icon: Icon, text }) => (
        <Link key={href} href={href} className={styles.link}>
          <Icon className={styles.icon} />
          <span>{text}</span>
        </Link>
      ))}
    </section>
  );
};

export default Contacts;
