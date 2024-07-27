import Image from "next/image";
import styles from "./page.module.css";
import line from "./assets/line.png";
import popcorn from "./assets/popcorn.png";
import cloud from "./assets/cloud.svg";
import wifiicon from "./assets/wifiicon.svg";
import background from "./assets/background.png";
export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.innerContainer}>
        <Image src={background} width={1500} className={styles.background} />
        <div className={styles.rightContainer}>
          <div className={styles.serviceContainer}>
            <span>دریافت سرویس</span>
            <Image src={line} width={100} />
          </div>
          <p>
            برای بهره‌مندی از این شرایط و دریافت سرویس‌های مختلف اینترنت پرسرعت
            شاتل فرم زیر را تکمیل کنید تا همکاران ما در سریع‌ترین هنگام با شما
            تماس بگیرند.
          </p>
          <div className={styles.formContainer}>
            <FormInput name="نام و نام خانوادگی" />
            <FormInput name="شماره تماس ثابت (به همراه کد شهر)" />
            <FormInput name="شماره موبایل" />
            <FormInput name="لطفا کاراکترها را تایپ کنید" />
            <button className={`${styles.button} ${styles.buttonPrimary}`}>
              ارسال
            </button>
          </div>
        </div>
        <div className={styles.leftContainer}>
          <Image src={popcorn} className={styles.popcorn} width={500} />
          <Image src={cloud} className={styles.cloud} />
          <Image src={wifiicon} className={styles.wifi} />
        </div>
      </div>
    </main>
  );
}
const FormInput = ({ name }) => {
  return (
    <div className={styles.formItemContainer}>
      <label>
        {name} <span>*</span>
      </label>
      <input />
    </div>
  );
};
