import React, { useEffect, useState } from "react";
import { Layout } from "../Components/Layout/Layout";
import { CenteredWrapper } from "../Components/CenteredWrapper/CenteredWrapper";
import Storage from "public/scripts/utils/storage";
import { SettingsContext, SettingsContextType } from "contexts/SettingsContext";
import { RangeSlider } from "Components/RangeSlider/RangeSlider";
import { GreenButton } from "Components/GreenButton/GreenButton";
import styled, { css } from "styled-components";
import { GrayBlock } from "Components/GrayBlock/GrayBlock";

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
  const [caseOpeningTime, setCaseOpeningTime] = useState(0);
  const [volume, setVolume] = useState(0);

  useEffect(() => {
    console.log(settings)
    setCaseOpeningTime(settings.caseOpeningTime)
    setVolume(settings.volume)
  }, [settings])

  return (
    <Layout>
      <GrayBlock>
        <SettingsDiv>
          <RangeSlider initValue={caseOpeningTime}
            label="Unboxing speed" min={0} max={5000} step={500}
            onValueChange={value => {
              setSettings({ ...settings, caseOpeningTime: value })
            }} />
          <RangeSlider initValue={volume}
            label="Volume"
            min={0} max={1} step={0.1}
            onValueChange={value => {
              setSettings({ ...settings, volume: value })
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
      </GrayBlock>
    </Layout>
  );
}

export default Settings;