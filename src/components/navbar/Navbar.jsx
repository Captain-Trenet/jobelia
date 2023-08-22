import Image from "next/image";
import styles from "./page.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          <div className={styles.logoContainer}>
            <h2>JO</h2>
          </div>
          <h2 className={styles.logoTitle}>Jobelia</h2>
        </div>
        <div className={styles.links}>
          <div className={styles.link + " " + styles.activeLink}>Find Jobs</div>
          <div className={styles.link}>Find Talent</div>
          <div className={styles.link}>Upload Job</div>
          <div className={styles.link}>About US</div>
        </div>
        <div className={styles.userinfo}>
          <Image
            src={"/icons/notification.png"}
            alt=""
            width={24}
            height={24}
          />
          <Image
            className={styles.user}
            src={"/images/06.jpg"}
            alt=""
            width={45}
            height={45}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
