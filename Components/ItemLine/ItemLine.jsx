import React, { Component } from "react";
import Item from "../Item/Item";
import styled, { css } from "styled-components";
import { getSlider } from "./keyframes";
import { itemType } from "../../helpers/item-type";
import { SettingsContext } from "../../contexts/SettingsContext";

const Animation = styled.div`
  display: flex;
  animation: ${css`
    ${(props) => props.slider} ${(props) => props.time / 1000}s;
  `};
  animation-fill-mode: forwards;

  & > div {
    margin-left: 5px;
  }
`;

export default class ItemLine extends Component {
  static contextType = SettingsContext;

  constructor() {
    super();
    this.state = {};
  }

  static getDerivedStateFromProps(props, state) {
    return {
      slider: getSlider(),
    };
  }

  render() {
    return (
      <Animation slider={this.state.slider} time={this.context.caseOpeningTime}>
        {this.props.items.map((value, index) => {
          if (value.type === itemType.GOLD) {
            return (
              <Item
                key={index}
                type={itemType.GOLD}
                image={"/images/specialitem1.png"}
                isStatrak={value.isStatrak}
                weapon={"★ Rare Special Item ★"}
              />
            );
          } else {
            return (
              <Item
                key={index}
                type={value.type}
                image={value.image}
                showSkinTitle
                isStatrak={value.isStatrak}
                weapon={value.weapon}
                skin={value.skin}
              />
            );
          }
        })}
      </Animation>
    );
  }
}
