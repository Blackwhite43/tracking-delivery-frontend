import { useTheme } from "next-themes";
import { useCallback, useState } from "react";
import styles from "./ThemeSwitcher.module.css";
import i18n from "@/services/i18n";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  const onChange = useCallback(
    (e) => {
      const newTheme = e.currentTarget.value;
      setTheme(newTheme);
      setSelectedTheme(newTheme);
    },
    [setTheme]
  );

  return (
    <select value={selectedTheme} onChange={onChange} className={styles.select}>
      <option value="system">{i18n.t("Sistem")}</option>
      <option value="dark">{i18n.t("Gelap")}</option>
      <option value="light">{i18n.t("Terang")}</option>
    </select>
  );
};

export default ThemeSwitcher;
