import React, { Component } from "react";
import { Layout } from "../Components/Layout/Layout";
import { CenteredWrapper } from "../Components/CenteredWrapper/CenteredWrapper";

export default class Settings extends Component {
  render() {
    return (
      <Layout
        content={
          <CenteredWrapper>
            <div className='settings'></div>
          </CenteredWrapper>
        }
      />
    );
  }
}
