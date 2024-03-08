import React from "react";
import Inventory from "../Components/Inventory/Inventory";
import { Layout } from "../Components/Layout/Layout";
import { GrayBlock } from "Components/GrayBlock/GrayBlock";

class App extends React.Component {
  render() {
    return (
      <Layout>
        <GrayBlock>
          <Inventory />
        </GrayBlock>
      </Layout>
    );
  }
}

export default App;
