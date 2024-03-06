import "./case.module.scss";
import Link from "next/link";
import Item from "../Item/Item";
import React, { Component } from "react";
import { itemType } from "public/scripts/drop/item-type";

export default class Case extends Component {
  constructor(props) {
    super(props);
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
          imageLocalPath={this.props.img}
          weapon={this.props.title}
          imageUrl={this.props.imageUrl}
        />
      </Link>
    );
  }
}
