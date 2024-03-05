import React, { Component } from "react";
import CaseList from "../CaseList/CaseList";
import styles from "./Inventory.module.scss";
import { InventoryButton } from "../InventoryButton/InventoryButton";
import { Dropdown } from "../Dropdown/Dropdown";
import { containerType } from "../../helpers/container-type";
//import cases from "../../public/cases.json";
import { Souvenir } from "../../public/souvenir.js";
import { Cases } from "../../public/cases.js";
import { Capsules } from "../../public/capsules";
import ReceivedItems from "../ReceivedItems/ReceivedItems";
import { capitalizeFirstLetter } from "../../public/scripts/string-utils";

export default class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cases: Cases,
      chosenSection: 1,
      currentPage: 1,
      containerType: containerType[0],
      capsules: Capsules,
      souvenirs: Souvenir,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.chosenSection !== this.state.chosenSection) {
      this.setState({
        currentPage: 1,
      });
    }
  }

  changeContainerType = (index) => {
    this.setState({
      containerType: containerType[index],
    });
  };

  render() {
    return (
      <div className={styles.inventory}>
        <div className={styles.header}>
          <InventoryButton
            onClick={() => {
              this.setState({
                chosenSection: 1,
              });
            }}
            active={this.state.chosenSection === 1}
            text='Cases'
          />
          <InventoryButton
            onClick={() => {
              this.setState({
                chosenSection: 2,
              });
            }}
            active={this.state.chosenSection === 2}
            text='Items'
          />
        </div>
        <div className={styles.ddWrap}>
          <Dropdown
            title='Type'
            options={[...containerType.map((value) => capitalizeFirstLetter(value.title))]}
            onOptionClick={(index) => {
              this.changeContainerType(index);
            }}
            chosenOption={capitalizeFirstLetter(this.state.containerType.title)}
          />
        </div>
        <div className={styles.listWrap}>
          {this.state.chosenSection === 1 && (
            <>
              {this.state.containerType === containerType[0] && (
                <CaseList
                  chosenType={this.state.containerType}
                  items={this.state.cases}
                />
              )}
              {this.state.containerType === containerType[1] && (
                <CaseList
                  chosenType={this.state.containerType}
                  items={this.state.souvenirs}
                />
              )}
              {this.state.containerType === containerType[2] && (
                <CaseList
                  chosenType={this.state.containerType}
                  items={this.state.capsules}
                />
              )}
            </>
          )}
          {this.state.chosenSection === 2 && <ReceivedItems />}
        </div>
      </div>
    );
  }
}
