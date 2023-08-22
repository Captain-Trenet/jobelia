import Image from "next/image";
import styles from "./page.module.scss";
import Card from "../card/Card";

const CardsContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <div className={styles.input}>
          <Image
            src={"/icons/search-normal.png"}
            alt=""
            width={24}
            height={24}
          />
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Search job title or keyword"
          />
        </div>
        <div className={styles.location}>
          <div className={styles.input}>
            <Image src={"/icons/location.png"} alt="" width={24} height={24} />
            <input
              className={styles.searchInput}
              type="text"
              placeholder="Search job title or keyword"
            />
            <button className={styles.locationBtn}>Find Jobs</button>
          </div>
        </div>
      </div>
      <div className={styles.cards}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CardsContainer;
