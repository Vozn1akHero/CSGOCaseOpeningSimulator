import React, { useState } from "react";
import styles from "./Dropdown.module.scss";

export const Dropdown = (props) => {
  const [optionsVisible, setOptionsVisible] = useState(false);
  const onOptionClick = (index) => {
    props.onOptionClick(index);
    setOptionsVisible(false);
  };
  return (
    <div className={styles.dropdown}>
      <div
        onClick={() => {
          setOptionsVisible(!optionsVisible);
        }}
        className={styles.titleWrap}
      >
        <span className={styles.title}>{props.title}</span>
        <div className={styles.optWrap}>
          <span className={styles.chosenOption}>{props.chosenOption}</span>
          <img src='/images/chevron-right.png' alt='' />
          {/* <span className={styles.arrow}>&#8250;</span> */}
        </div>
      </div>
      {optionsVisible && (
        <ul className={styles.options}>
          {props.options.map((value, index) => (
            <li
              key={index}
              onClick={() => onOptionClick(index)}
              className={styles.option}
            >
              {value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
