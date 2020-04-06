import React, { Component } from "react";
import Storage from "../../helpers/storage";
import Item from "../Item/Item";
import ScrollableList from "../ScrollableList/ScrollableList";

export default class ReceivedItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: Storage.selectAll(),
    };
    console.log(this.state.items);
  }

  render() {
    return (
      <ScrollableList>
        {this.state.items.map((value, index) => (
          <Item
            key={index}
            showSkinTitle
            inventoryStyles
            withModalInfo
            type={value.type}
            image={value.image}
            weapon={value.weapon}
            quality={value.quality}
            skin={value.skin}
          />
        ))}
      </ScrollableList>
    );
  }
}
