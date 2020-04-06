import React, { Component } from "react";
import styles from "./ScrollableList.module.scss";

export default class ScrollableList extends Component {
  render() {
    return <div className={styles.scrollableList}>{this.props.children}</div>;
  }
}
