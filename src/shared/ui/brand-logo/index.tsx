import Link from "next/link";
import styles from './brand-logo.module.scss'

const BrandLogo = () => {
  return (
    <Link href="/" className={styles.logo}>
      Abelohost Shop<span className={styles.dot}>.</span>
    </Link>
  );
};

export default BrandLogo;
