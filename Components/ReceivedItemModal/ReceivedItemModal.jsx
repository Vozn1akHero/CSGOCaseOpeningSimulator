import React, { Component } from "react";
import { GreenButton } from "../GreenButton/GreenButton";
import styles from "./ReceivedItemModal.module.scss";
import { SettingsContext } from "../../contexts/SettingsContext";
import { itemType } from "public/scripts/drop/item-type";

export default class ReceivedItemModal extends Component {
  static contextType = SettingsContext;
  static receivedItemModalBgClassByType = {
    [itemType.GREY]: styles.receivedItemModal_consumerGrade,
    [itemType.LIGHTBLUE]: styles.receivedItemModal_lightBlue,
    [itemType.BLUE]: styles.receivedItemModal_blue,
    [itemType.PURPLE]: styles.receivedItemModal_purple,
    [itemType.PINK]: styles.receivedItemModal_pink,
    [itemType.RED]: styles.receivedItemModal_red,
    [itemType.GOLD]: styles.receivedItemModal_special,
    [itemType.GREY]: styles.receivedItemModal_consumerGrade,
    [itemType.LIGHTBLUE]: styles.receivedItemModal_consumerGrade
  }

  constructor(props) {
    super(props);

    this.state = {
      receivedItemModalBgClass: ReceivedItemModal.receivedItemModalBgClassByType[this.props.type],
    };
  }

  componentDidMount() {
    const play = (elId) => {
      const audio = document.getElementById(elId)
      audio?.play();
      audio.volume = this.context.settings.volume
    }

    switch (this.props.type) {
      case itemType.GREY:
      case itemType.LIGHTBLUE:
        {
          play("soundDrop1")
          break;
        }
      case itemType.BLUE:
        {
          play("soundDrop2")
          break;
        }
      case itemType.PURPLE:
        {
          play("soundDrop3")
          break;
        }
      case itemType.PINK:
        {
          play("soundDrop4")
          break;
        }
      case itemType.RED:
      case itemType.GOLD:
        {
          play("soundDrop5")
          break;
        }
    }
  }

  render() {
    return (
      <div className={`${styles.receivedItemModal} ${this.state.receivedItemModalBgClass}`}>
        <h1 className={styles.itemTitle}>
          {this.props.isStatrak && "StatTrak™" + " "} {this.props.title}
        </h1>
        <div className={`${styles.imageWrap}`}>
          <img draggable={false} src={this.props.imageUrl ? this.props.imageUrl : this.props.image} alt='' />
        </div>
        <div className={styles.bottomWrap}>
          <span>You got a new item!</span>
          <div className={styles.btnRowWrap}>
            <GreenButton
              onClick={() => {
                this.props.onSubmit();
              }}
              text='Continue'
            />
            <GreenButton id='tryAgainBtn'
              onClick={() => {
                this.props.onTryAgainBtnClick();
              }}
              text='Try again'
            />
          </div>
        </div>
      </div>
    );
  }
}
