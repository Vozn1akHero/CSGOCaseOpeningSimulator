import React from "react";

export const UnlockingContainerNotification = () => {
  return (
    <div className='unlocking-container-notification'>
      <span>Unlocking Container...</span>

      <style jsx>
        {`
          .unlocking-container-notification {
            height: 4rem;
            width: 60%;
            display: flex;
            background: #253645;
            align-items: center;
            padding-left: 2rem;
            margin: 0 auto;
          }

          .unlocking-container-notification span {
            font-size: 1.1rem;
            font-weight: 500;
            color: #7998b7;
          }
        `}
      </style>
    </div>
  );
};
