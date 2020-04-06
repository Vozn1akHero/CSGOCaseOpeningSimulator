import React from "react";

export const CenteredWrapper = (props) => {
  return (
    <div className='centered-wrapper'>
      <div className='m-sec'>{props.children}</div>
      <style jsx>
        {`
          .centered-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .centered-wrapper .m-sec {
            box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.75);
            height: 85vh;
            width: 70vw;
            background: #333b42;
          }
        `}
      </style>
    </div>
  );
};
