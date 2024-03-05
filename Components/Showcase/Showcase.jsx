import React, { Component } from "react";
import Item from "../Item/Item";
import styles from "./showcase.module.scss";
import { itemType } from "../../helpers/item-type";
export default class Showcase extends Component {
  render() {
    return (
      <div className={styles.showcase}>
        <span className={styles.introtext}>
          Items that might be in this case:
        </span>
        <div className={styles.items}>
          {this.props.items.map((value, index) => (
            <Item
              key={index}
              showSkinTitle
              type={value.type}
              image={value.image}
              weapon={value.weapon}
              skin={value.skin}
            />
          ))}
          {this.props.baseContainerType && (
            <Item
              type={itemType.GOLD}
              image={"/images/specialitem1.png"}
              weapon={"★ Rare Special Item ★"}
            />
          )}
        </div>
      </div>
    );
  }
}
