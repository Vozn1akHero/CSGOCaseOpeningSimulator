import "./case.module.scss";
import Link from "next/link";
import Item from "../Item/Item";
import React, { Component } from "react";
import { itemType } from "../../public/scripts/drop/item-type";
import { containerType } from "../../public/scripts/drop/container-type";

export default class Case extends Component {
  constructor(props) {
    super(props);
    // switch (this.props.chosenType) {
    //   case containerType[0]:
    //     this.state = {
    //       linkBase: "case",
    //     };
    //     break;
    //   case containerType[1]:
    //     this.state = {
    //       linkBase: "souvenir",
    //     };
    //     break;
    //   default:
    //     this.state = {
    //       linkBase: "case",
    //     };
    //     break;
    // }
    this.state = {
      linkBase: this.props.chosenType.title,
    };
  }

  render() {
    return (
      <Link
        href={`/container/` + this.props.id + `?type=${this.state.linkBase}`}
      >
        <Item
          inventoryStyles
          type={itemType.GREY}
          image={this.props.img}
          weapon={this.props.title}
        />
      </Link>
    );
  }
}
