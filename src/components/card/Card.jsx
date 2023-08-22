import Image from "next/image";
import styles from "./page.module.scss";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div className={styles.topLeft}>
          <Image src={"/icons/twitter.png"} alt="" width={60} height={60} />
          <div className={styles.info}>
            <div className={styles.title}>UIUX Designer</div>
            <div className={styles.company}>Twitter</div>
          </div>
        </div>
        <Image src={"/icons/heart.png"} alt="" width={24} height={24} />
      </div>
      <div className={styles.bottom}>
        <div className={styles.location}>
          <Image src={"/icons/location.png"} alt="" width={20} height={20} />
          <div className={styles.name}>Jakarta, Indonesia</div>
        </div>
        <div className={styles.location}>
          <Image src={"/icons/dollar.png"} alt="" width={20} height={20} />
          <div className={styles.name}>$2000 - $3000 USD</div>
        </div>

        <div className={styles.details}>
          <div className={styles.left}>
            <Image src={"/icons/clock.png"} alt="" width={16} height={16} />
            <div className={styles.time}>Posted 10 min ago</div>
          </div>
          <btn className={styles.btn}>Details</btn>
        </div>
      </div>
    </div>
  );
};

export default Card;
