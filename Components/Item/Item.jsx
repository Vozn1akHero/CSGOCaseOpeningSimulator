import React, { Component } from "react";
import styles from "./item.module.scss";
import { itemType } from "../../public/scripts/drop/item-type";
import { Quality } from "../../public/scripts/drop/quality";

export default class Item extends Component {
  constructor(props) {
    super(props);
    switch (this.props.type) {
      case itemType.GREY:
        this.state = {
          gunCardBorderName: styles.item_consumerGrade,
        };
        break;
      case itemType.LIGHTBLUE:
        this.state = {
          gunCardBorderName: styles.item_baseGrade,
        };
        break;
      case itemType.BLUE:
        this.state = {
          gunCardBorderName: styles.item_blue,
        };
        break;
      case itemType.PURPLE:
        this.state = {
          gunCardBorderName: styles.item_purple,
        };
        break;
      case itemType.PINK:
        this.state = {
          gunCardBorderName: styles.item_pink,
        };
        break;
      case itemType.RED:
        this.state = {
          gunCardBorderName: styles.item_red,
        };
        break;
      case itemType.GOLD:
        this.state = {
          gunCardBorderName: this.props.inventoryStyles
            ? styles.item_red
            : styles.item_special,
        };
        break;

      default:
        this.state = {
          gunCardBorderName: styles.item_consumerGrade,
        };
        break;
    }
    if (this.props.isStatrak) {
      if (this.props.type == itemType.GOLD) {
        if (this.props.inventoryStyles) {
          this.state = {
            ...this.state,
            showStatrak: true,
          };
        } else {
          this.state = {
            ...this.state,
            showStatrak: false,
          };
        }
      } else {
        this.state = {
          ...this.state,
          showStatrak: true,
        };
      }
    }
  }

  render() {
    return (
      <div
        onMouseOver={() => {
          this.setState({
            modalInfoVisible: true,
          });
        }}
        onMouseLeave={() => {
          this.setState({
            modalInfoVisible: false,
          });
        }}
        className={`${styles.item} ${this.props.inventoryStyles && styles.item_inInventory
          }`}
      >
        {this.state.modalInfoVisible && this.props.withModalInfo && (
          <div className={styles.modalInfo}>
            <span className={styles.modalInfo__title}>
              {this.state.showStatrak && "StatTrak™ "}
              {this.props.weapon}{" "}
              {this.props.showSkinTitle && (
                <span className={styles.skintitle}>{this.props.skin}</span>
              )}
            </span>
            <hr className={styles.modalInfo__line} />
            {this.props.quality && (
              <div className={styles.modalInfo__qualityWrap}>
                <span className={styles.modalInfo__label}>Quality: </span>
                <span className={styles.modalInfo__info}>
                  {this.props.quality}
                </span>
              </div>
            )}
          </div>
        )}

        <div className={styles.imageWrap}>
          <img
            src={this.props.image}
            className={`${styles.img} ${this.props.inventoryStyles && styles.img_inInventory
              }`}
            alt=''
          />
        </div>

        <div className={`${styles.bottom} ${this.state.gunCardBorderName}`}>
          <span className={styles.itemTitle}>
            {this.state.showStatrak && "StatTrak™ "}
            {this.props.weapon}
          </span>
          {this.props.showSkinTitle && (
            <span className={styles.skintitle}>{this.props.skin}</span>
          )}
        </div>
      </div>
    );
  }
}
