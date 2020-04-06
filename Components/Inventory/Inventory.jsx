import React, { Component } from "react";
import CaseList from "../CaseList/CaseList";
import styles from "./Inventory.module.scss";
import { InventoryButton } from "../InventoryButton/InventoryButton";
import { Dropdown } from "../Dropdown/Dropdown";
import { containerType } from "../../helpers/container-type";
//import cases from "../../public/cases.json";
import { Souvenir } from "../../public/Souvenir.js";
import { Cases } from "../../public/cases.js";
import ReceivedItems from "../ReceivedItems/ReceivedItems";

export default class Inventory extends Component {
  constructor(props) {
    super(props);
    console.log(Cases);
    this.state = {
      cases: Cases,
      chosenSection: 1,
      currentPage: 1,
      containerType: containerType[0],
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
    if (!this.state.souvenirs) {
      if (containerType[1].id === containerType[index].id) {
        this.setState({
          souvenirs: Souvenir,
          containerType: containerType[index],
        });
      }
    } else {
      this.setState({
        containerType: containerType[index],
      });
    }
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
            options={[...containerType.map((value) => value.title)]}
            onOptionClick={(index) => {
              this.changeContainerType(index);
            }}
            chosenOption={this.state.containerType.title}
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
            </>
          )}
          {this.state.chosenSection === 2 && <ReceivedItems />}
        </div>
      </div>
    );
  }
}
