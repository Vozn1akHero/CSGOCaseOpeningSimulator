import React, { Component } from "react";
import Case from "../Case/Case";
import ScrollableList from "../ScrollableList/ScrollableList";

export default class CaseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caseList: this.props.items,
    };
  }

  render() {
    return (
      <ScrollableList>
        {this.state.caseList.map((value, index) => (
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
    );
  }
}
