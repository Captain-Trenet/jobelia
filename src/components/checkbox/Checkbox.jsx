"use client";
import { useState } from "react";
import styles from "./page.module.scss";

const Checkbox = ({ type, id, handleCheckBox }) => {
  if (type === "radio") {
    return (
      <div className={styles.radioItem}>
        <input
          onChange={(e) => handleCheckBox && handleCheckBox(e)}
          id={id}
          type="radio"
        />
        <label htmlFor={id} className={`${styles.radioBox}`}>
          <div className={styles.smallCircle}></div>
        </label>
      </div>
    );
  }

  return (
    <div className={styles.checkItem}>
      <input
        onChange={(e) => handleCheckBox && handleCheckBox(e)}
        id={id}
        type="checkbox"
      />
      <label htmlFor={id} className={`${styles.checkBox}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
        >
          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
        </svg>
      </label>
    </div>
  );
};

export default Checkbox;
