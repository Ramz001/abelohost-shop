import Gutter from "@shared/ui/gutter";
import Contacts from "../contacts";
import styles from "./top-bar.module.scss";

const TopBar = () => {
  return (
    <section className={styles.container}>
      <Gutter>
        <Contacts />
      </Gutter>
    </section>
  );
};

export default TopBar;
