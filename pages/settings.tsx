import React, { Component } from "react";
import { Layout } from "../Components/Layout/Layout";
import { CenteredWrapper } from "../Components/CenteredWrapper/CenteredWrapper";
import Storage from "public/scripts/utils/storage";

export default class Settings extends Component {
  render() {
    return (
      <Layout
        content={
          <CenteredWrapper>
            <div className='settings'>
              <button onClick={() => {
                Storage.clearUnboxedItems();
              }}>Clear unboxed items</button>
            </div>
          </CenteredWrapper>
        }
      />
    );
  }
}
