import React from "react";
import Inventory from "../Components/Inventory/Inventory";
import { Layout } from "../Components/Layout/Layout";
import { CenteredWrapper } from "../Components/CenteredWrapper/CenteredWrapper";

class App extends React.Component {
  render() {
    return (
      <Layout
        content={
          <CenteredWrapper>
            <Inventory />
          </CenteredWrapper>
        }
      />
    );
  }
}

export default App;
