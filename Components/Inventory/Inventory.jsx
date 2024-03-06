import React, { Component } from "react";
import CaseList from "../CaseList/CaseList";
import styles from "./Inventory.module.scss";
import { InventoryButton } from "../InventoryButton/InventoryButton";
import { Dropdown } from "../Dropdown/Dropdown";
import { containerType } from "../../public/scripts/drop/container-type";
//import cases from "../../public/cases.json";
import { Souvenir } from "../../public/data/souvenirs/souvenir.js";
import { Cases } from "../../public/data/cases/cases.js";
import { Capsules } from "../../public/data/capsules/capsules";
import ReceivedItems from "../ReceivedItems/ReceivedItems";
import { capitalizeFirstLetter } from "../../public/scripts/utils/string-utils";
import ScrollableList from "Components/ScrollableList/ScrollableList";
import Case from "Components/Case/Case";

export default class Inventory extends Component {
  constructor(props) {
    super(props);
    const allItems = [Cases, Souvenir, Capsules].flat();
    this.state = {
      allItems,
      chosenSection: 1,
      currentPage: 1,
      containerType: containerType.ALL,
      visibleItems: allItems
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
      containerType: containerType[Object.keys(containerType)[index]],
    }, () => {
      this.onContainerTypeChanged();
    });
  };

  onContainerTypeChanged = () => {
    if (this.state.containerType === containerType.ALL) {
      this.setState({
        visibleItems: this.state.allItems
      })
    }
    else if (this.state.containerType === containerType.CASE) {
      this.setState({
        visibleItems: Cases
      })
    }
    else if (this.state.containerType === containerType.SOUVENIR) {
      this.setState({
        visibleItems: Souvenir
      })
    }
    else if (this.state.containerType === containerType.CAPSULE) {
      this.setState({
        visibleItems: Capsules
      })
    }
  }

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
            text='Containers'
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
        {this.state.chosenSection === 1 &&
          <div className={styles.ddWrap}>
            <Dropdown
              title='Type'
              options={[...Object.entries(containerType).map((value) => capitalizeFirstLetter(value[0]))]}
              onOptionClick={(index) => {
                this.changeContainerType(index);
              }}
              chosenOption={capitalizeFirstLetter(Object.entries(containerType)[this.state.containerType][0])}
            />
          </div>
        }
        <div className={styles.listWrap}>
          {this.state.chosenSection === 1 &&
            <ScrollableList>
              {this.state.visibleItems.map((value, index) => (
                <Case
                  containerType={value.containerType}
                  key={index}
                  id={value.id}
                  title={value.title}
                  img={value.image}
                  imageUrl={value.imageUrl}
                />
              ))}
            </ScrollableList>
          }
          {this.state.chosenSection === 2 && <ReceivedItems />}
        </div>
      </div>
    );
  }
}
