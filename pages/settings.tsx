import React, { Component } from "react";
import { Layout } from "../Components/Layout/Layout";
import { CenteredWrapper } from "../Components/CenteredWrapper/CenteredWrapper";
import Storage from "public/scripts/utils/storage";
import { SettingsContext } from "contexts/SettingsContext";
import { RangeSlider } from "Components/RangeSlider/RangeSlider";
import { GreenButton } from "Components/GreenButton/GreenButton";
import styled, { css } from "styled-components";

const SettingsDiv = styled.div`
      display: grid;
      justify-content: center;
      padding-top: 60px;
      grid-gap: 2.5rem;
`

const CenteredDiv = styled.div`
margin-left: auto;
margin-right: auto;
`

export default class Settings extends Component {
  static contextType = SettingsContext;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout
        content={
          <CenteredWrapper>
            <SettingsDiv>
              <RangeSlider label="Unboxing speed" />
              <RangeSlider label="Volume" />
              <CenteredDiv>
                <GreenButton id="clear-unboxed-items-btn"
                  text="Clear unboxed items"
                  onClick={() => {
                    Storage.clearUnboxedItems();
                  }} />
              </CenteredDiv>
            </SettingsDiv>
          </CenteredWrapper>
        }
      />
    );
  }
}
