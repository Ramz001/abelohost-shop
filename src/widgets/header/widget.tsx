import Link from "next/link";
import styles from "./header.module.scss";
import { Phone, Mail, MapPin, LogIn, LogOut } from "lucide-react";
import Navigation from "./ui/navigation";
import Gutter from "@shared/ui/gutter";
import BrandLogo from "@shared/ui/brand-logo";
import Banner from "@shared/ui/banner";

export default function HeaderWidget({}) {
  // const isAuthenticated = false;

  return (
    <header className={styles.header}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.contactInfo}>
          <span className={styles.contactItem}>
            <Phone className={styles.icon} /> +021-95-51-84
          </span>
          <span className={styles.contactItem}>
            <Mail className={styles.icon} /> shop@abelohost.com
          </span>
          <span className={styles.contactItem}>
            <MapPin className={styles.icon} /> 1734 Stonecoal Road
          </span>
        </div>
        <div className={styles.authSection}>
          {/* {isAuthenticated ? (
              <>
                <span className={styles.userName}>
                  {userFirstName} {userLastName}
                </span>
                <button onClick={onLogout} className={styles.logoutBtn}>
                  <LogOut className={styles.icon} /> Logout
                </button>
              </>
            ) : (
              <Link href="/auth" className={styles.loginLink}>
                <LogIn className={styles.icon} /> Login
              </Link>
            )} */}
        </div>
      </div>

      {/* Main Header */}
      <div className={styles.mainHeader}>
        <div className={styles.container}>
          <BrandLogo />
          <Banner />
        </div>
      </div>

      <Navigation />
    </header>
  );
}
