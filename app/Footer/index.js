import Image from "next/image";
import styles from "./Footer.module.css";
import message from "./assets/message.svg";
import mail from "./assets/mail.svg";
import phone from "./assets/phone.svg";
import line from "./assets/line.svg";
const Footer = () => {
  return (
    <>
      <Image src={line} />
      <div className={styles.container}>
        <ul className={styles.rightContainer}>
          <li>پیشنهاد های جشنواره</li>
          <li>درباره پیشنهاد</li>
          <li>توضیحات بیشتر</li>
          <li>ارتباط با ما</li>
        </ul>
        <div className={styles.leftContainer}>
          <div className={styles.LeftItem}>
            <span>91000000</span>
            <Image src={phone} />
          </div>
          <div className={styles.LeftItem}>
            <span>info@shatel.ir</span>
            <Image src={mail} />
          </div>
          <div className={styles.LeftItem}>
            <span>گفت و گوی آنلاین</span>
            <Image src={message} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
