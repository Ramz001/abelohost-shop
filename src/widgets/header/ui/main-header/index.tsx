import Gutter from "@shared/ui/gutter";
import BrandLogo from "@shared/ui/brand-logo";
import Banner from "@shared/ui/banner";
import styles from "./main-header.module.scss";

const MainHeader = () => {
  return (
    <section className={styles.container}>
      <Gutter>
        <div className={styles.wrapper}>
          <BrandLogo />
          <Banner />
        </div>
      </Gutter>
    </section>
  );
};

export default MainHeader;
