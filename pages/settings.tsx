import React, { Component, useContext } from "react";
import { Layout } from "../Components/Layout/Layout";
import { CenteredWrapper } from "../Components/CenteredWrapper/CenteredWrapper";
import Storage from "public/scripts/utils/storage";
import { SettingsContext, SettingsContextType, useSettingsContext } from "contexts/SettingsContext";
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

const Settings = () => {
  const { settings, setSettings } = React.useContext(SettingsContext) as SettingsContextType;

  return (
    <Layout>
      <CenteredWrapper>
        <SettingsDiv>
          <RangeSlider initValue={settings.caseOpeningTime}
            label="Unboxing speed" min={0} max={5000} step={500}
            onValueChange={caseOpeningTime => {
              setSettings({ ...settings, caseOpeningTime })
            }} />
          <RangeSlider initValue={settings.volume}
            label="Volume"
            min={0} max={1} step={0.1}
            onValueChange={volume => {
              setSettings({ ...settings, volume })
            }} />
          <CenteredDiv>
            <GreenButton id="reset-btn"
              text="Reset"
              onClick={() => {

              }} />
          </CenteredDiv>
          <CenteredDiv>
            <GreenButton id="clear-unboxed-items-btn"
              customColor="#DC143C"
              text="Clear unboxed items"
              onClick={() => {
                Storage.clearUnboxedItems();
              }} />
          </CenteredDiv>
        </SettingsDiv>
      </CenteredWrapper>
    </Layout>
  );
}

export default Settings;