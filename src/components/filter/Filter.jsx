"use client";
import { useRef, useState } from "react";
import Checkbox from "../checkbox/Checkbox";
import styles from "./page.module.scss";

const Filter = () => {
  const handleCheckBox = (e) => {
    console.log(e.target.checked);
  };

  const [time, setTime] = useState("");
  const [stat, setStat] = useState(false);
  console.log("re rendering");
  return (
    <div className={styles.filter}>
      <div className={styles.top}>
        <div className={styles.headTitle}>Filter</div>
        <div className={styles.clear}>Clear all</div>
      </div>
      <div className={styles.bottom}>
        <div style={{marginTop: "0"}} className={styles.item}>
          <div className={styles.itemHeader}>Date Post</div>
          <div className={styles.timerBox}>
            <input
              type="text"
              placeholder="Anytime"
              className={styles.time}
              readOnly
              value={time}
            />
            <svg
              onClick={() => setStat(!stat)}
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
              fill="#d3d3d3"
            >
              <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
            </svg>
            <div
              className={`${styles.dropdown} ${stat && styles.dropdownVisible}`}
            >
              <div
                onClick={(e) => {
                  setTime(e.target.innerHTML);
                  setStat(false);
                }}
                className={styles.dropdownItem}
              >
                Anytime
              </div>
              <div
                onClick={(e) => {
                  setTime(e.target.innerHTML);
                  setStat(false);
                }}
                className={styles.dropdownItem}
              >
                Past 24 hours
              </div>
              <div
                onClick={(e) => {
                  setTime(e.target.innerHTML);
                  setStat(false);
                }}
                className={styles.dropdownItem}
              >
                Past week
              </div>
              <div
                onClick={(e) => {
                  setTime(e.target.innerHTML);
                  setStat(false);
                }}
                className={styles.dropdownItem}
              >
                Past month
              </div>
            </div>
          </div>
          {/* <select name="date" id="date" className={styles.select}>
            <option value="Anytime">Anytime</option>
            <option value="Past 24 hours">Past 24 hours</option>
            <option value="Past week">Past week</option>
            <option value="Past month">Past month</option>
          </select> */}
        </div>
        <div className={styles.line}></div>
        {/* 1 */}
        <div className={styles.item + " " + styles.itemCheck}>
          <div className={styles.itemHeader}>Job type</div>
          <div className={styles.checks}>
            <div className={styles.checkContainer}>
              <Checkbox id={"check1"} handleCheckBox={handleCheckBox} />
              <div>Full-Time</div>
            </div>
            <div className={styles.checkContainer}>
              <Checkbox id={"check2"} handleCheckBox={handleCheckBox} />
              <div>Part-Time</div>
            </div>
            <div className={styles.checkContainer}>
              <Checkbox id={"check3"} handleCheckBox={handleCheckBox} />
              <div>Internship</div>
            </div>
            <div className={styles.checkContainer}>
              <Checkbox id={"check4"} handleCheckBox={handleCheckBox} />
              <div>Volunteer</div>
            </div>
          </div>
        </div>
        {/* 1 */}
        {/* 2 */}
        <div className={styles.line}></div>
        <div className={styles.item}>
          <div className={styles.itemHeader}>Range Salary</div>
          <div className={styles.checks}>
            <div className={styles.checkContainer}>
              <Checkbox
                type={"radio"}
                id={"check5"}
                handleCheckBox={handleCheckBox}
              />
              <div>Under $1000</div>
            </div>
            <div className={styles.checkContainer}>
              <Checkbox
                type={"radio"}
                id={"check6"}
                handleCheckBox={handleCheckBox}
              />
              <div>$1000 to $2500</div>
            </div>
            <div className={styles.checkContainer}>
              <Checkbox
                type={"radio"}
                id={"check7"}
                handleCheckBox={handleCheckBox}
              />
              <div>$2500 to $5000 </div>
            </div>
            <div className={styles.checkContainer}>
              <Checkbox
                type={"radio"}
                id={"check8"}
                handleCheckBox={handleCheckBox}
              />
              <div>Custom</div>
            </div>
          </div>
        </div>
        <div className={styles.line}></div>
        {/* 2 */}
        {/* 3 */}
        <div className={styles.item + " " + styles.itemCheck}>
          <div className={styles.itemHeader}>On-site/Remote</div>
          <div className={styles.checks}>
            <div className={styles.checkContainer}>
              <Checkbox id={"check1"} handleCheckBox={handleCheckBox} />
              <div>On-site</div>
            </div>
            <div className={styles.checkContainer}>
              <Checkbox id={"check2"} handleCheckBox={handleCheckBox} />
              <div>Hybrid</div>
            </div>
            <div className={styles.checkContainer}>
              <Checkbox id={"check3"} handleCheckBox={handleCheckBox} />
              <div>Remote</div>
            </div>
          </div>
        </div>
        {/* 3 */}
        {/* 4 */}
        <div className={styles.line}></div>
        <div className={styles.item + " " + styles.itemCheck}>
          <div className={styles.itemHeader}>Job Function</div>
          <div className={styles.checks}>
            <div className={styles.checkContainer}>
              <Checkbox id={"check1"} handleCheckBox={handleCheckBox} />
              <div>Engineering</div>
            </div>
            <div className={styles.checkContainer}>
              <Checkbox id={"check2"} handleCheckBox={handleCheckBox} />
              <div>Project Management</div>
            </div>
            <div className={styles.checkContainer}>
              <Checkbox id={"check3"} handleCheckBox={handleCheckBox} />
              <div>Design</div>
            </div>
            <div className={styles.checkContainer}>
              <Checkbox id={"check3"} handleCheckBox={handleCheckBox} />
              <div>Information Technology</div>
            </div>
            <div className={styles.checkContainer}>
              <Checkbox id={"check3"} handleCheckBox={handleCheckBox} />
              <div>Quality Assurance</div>
            </div>
            <div className={styles.checkContainer}>
              <Checkbox id={"check3"} handleCheckBox={handleCheckBox} />
              <div>Consulting</div>
            </div>
          </div>
        </div>
        {/* 5 */}
      </div>
    </div>
  );
};

export default Filter;
