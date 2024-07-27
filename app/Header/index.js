import Image from "next/image";
import logo from "./assets/logo.png";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.rightContainer}>
        <Image src={logo} width={64} height={64} />
        <ul className={styles.itemsContainer}>
          <li>پیشنهاد</li>
          <li>خرید</li>
          <li>توضیحات</li>
          <li>تماس</li>
        </ul>
      </div>
      <div className={styles.leftContainer}>
        <button className={`${styles.button} ${styles.buttonPrimary}`}>
          شاتل
        </button>
        <button className={`${styles.button} ${styles.buttonSecondary}`}>
          نماوا
        </button>
      </div>
    </div>
  );
};

export default Header;
