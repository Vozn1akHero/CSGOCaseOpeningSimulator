import React from "react";
import HeaderNav from "../HeaderNav/HeaderNav";
import SettingsContextProvider from "contexts/SettingsContext";
import { CenteredWrapper } from "Components/CenteredWrapper/CenteredWrapper";
import { ProfilePanel } from "Components/ProfilePanel/ProfilePanel";
import styled from "styled-components"

const Wrapper = styled.div`
  height: 85vh;
  width: 100%;
`

export const Layout = (props) => {
  return (
    <div className='layout'>
      <HeaderNav />
      <main>
        {/* <div className="profile-panel-content">
          <ProfilePanel />
        </div> */}
        <div className="subpage-content">
          {props.children}
        </div>
      </main>
      <style jsx>
        {`
            .layout {
              background-image: url("/images/csgomenubg.jpg");
              min-height: max(900px, 100vh);
              background-size: cover;
              background-repeat: no-repeat;
              min-width: 1200px;
            }

            main {
              margin-top: 3rem;
              {/* display: flex; */}
            }

            {/* .profile-panel-content{
              width: 25%;
              padding-right: 20px;
              padding-left: 250px;
            } */}

            .subpage-content{
              width: 70%;
              height: 85vh;
              margin-left: auto;
              margin-right: auto;
              {/* padding-left: 20px;
              padding-right: 250px; */}
            }
          `}
      </style>
    </div>
  );
};
