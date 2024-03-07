import React, { Component } from "react";
import styles from "./HeaderNav.module.scss";
import { HeaderAnchor } from "../HeaderAnchor/HeaderAnchor";

export default class HeaderNav extends Component {
  render() {
    return (
      <div className={styles.headerNav}>
        <HeaderAnchor bordered to='/' title="INVENTORY" />
        <HeaderAnchor to='/settings' title="OPTIONS" />
      </div>
    );
  }
}
