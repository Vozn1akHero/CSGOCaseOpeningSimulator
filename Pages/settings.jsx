import React, { Component } from "react";
import { Layout } from "../Components/Layout/Layout";

export default class Settings extends Component {
  render() {
    return (
      <Layout
        content={
          <div className='settings-page'>
            <style jsx>
              {`
                .settings-page {
                  box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.75);
                  height: 85vh;
                  width: 70vw;
                  background: #333b42;
                  position: relative;
                }
              `}
            </style>
          </div>
        }
      />
    );
  }
}
