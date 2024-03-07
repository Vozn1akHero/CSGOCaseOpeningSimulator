import React, { Component } from "react";
import Storage from "../../public/scripts/utils/storage";
import Item from "../Item/Item";
import ScrollableList from "../ScrollableList/ScrollableList";
import styled from "styled-components"

const CenteredDiv = styled.div`
display: flex;
width: 100%;
height: 100%;
align-items: center;
justify-content: center;
`

export default class ReceivedItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: Storage.selectAll(),
    };
  }

  render() {
    return (
      this.state.items.length > 0 ? <ScrollableList>{this.state.items.map((value, index) => (
        <Item
          key={index}
          showSkinTitle
          inventoryStyles
          withModalInfo
          type={value.type}
          imageLocalPath={value.image}
          imageUrl={value.imageUrl}
          weapon={value.weapon}
          quality={value.quality}
          skin={value.skin}
          isStatrak={value.isStatrak}
        />
      ))}</ScrollableList> :
        <CenteredDiv>
          <span style={{ color: "white" }}>Get a knife!</span>
        </CenteredDiv>
    );
  }
}
