import React from "react";
import styles from "./InventoryButton.module.scss";

export const InventoryButton = props => {
  return (
    <button
      onClick={() => props.onClick()}
      className={`${styles.inventoryBtn} ${props.active &&
        styles.inventoryBtn_active}`}
    >
      {props.text}
    </button>
  );
};
