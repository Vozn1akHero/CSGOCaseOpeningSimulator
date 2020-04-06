import React from "react";
import Inventory from "../Components/Inventory/Inventory";
import { Layout } from "../Components/Layout/Layout";

class App extends React.Component {
  render() {
    return (
      <Layout
        content={
          <div className='index'>
            <Inventory />
            <style jsx>
              {`
                .index {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                }
              `}
            </style>
          </div>
        }
      />
    );
  }
}

export default App;
