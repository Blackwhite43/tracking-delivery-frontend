import styles from "./Hero.module.css";
import i18n from "@/services/i18n";

const Custom404Main = () => {
  return (
    <div>
      <h1 className={styles.title}>
        <span className={styles.mongodb}>{i18n.t("title_404")}</span>
        <span className={styles.mongodb}>{i18n.t("isi_404")}</span>
      </h1>
    </div>
  );
};

export default Custom404Main;
