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

  // select = (page) => {
  //   let firstIndex = (page - 1) * 30;
  //   let lastIndex = firstIndex + 29;
  //   return this.props.items.slice(firstIndex, lastIndex);
  // };

  render() {
    return (
      <ScrollableList>
        {this.state.caseList.map((value, index) => (
          <Case
            chosenType={this.props.chosenType}
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
