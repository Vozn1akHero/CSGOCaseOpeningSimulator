import React from "react";
import HeaderNav from "../HeaderNav/HeaderNav";
import SettingsContextProvider from "contexts/SettingsContext";

export const Layout = (props) => {
  return (
    <div className='layout'>
      <HeaderNav />
      <main>{props.children}</main>
      <style jsx>
        {`
            .layout {
              background-image: url("/images/csgomenubg.jpg");
              min-height: 100vh;
              background-size: cover;
              background-repeat: no-repeat;
              min-width: 1200px;
            }

            main {
              margin-top: 3rem;
            }
          `}
      </style>
    </div>
  );
};
