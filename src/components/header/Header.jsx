import styles from "./page.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <h1>Find your dream Job</h1>
        <p>
          Looking for jobs? Browse our latest job openings to view & apply best
          jobs today!
        </p>

        <div className={styles.rectangle}></div>
      </div>
    </div>
  );
};

export default Header;
