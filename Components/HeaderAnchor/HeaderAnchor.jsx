import React from "react";
import Link from "next/link";

export const HeaderAnchor = (props) => {
  return (
    <>
      <>
        <Link href={props.to}>
          <span className='header-btn'>
            <img src={props.icon} alt='' />
          </span>
        </Link>
        {props.bordered && <hr className='header-btn__border' />}
      </>
      <style jsx>
        {`
          .header-btn {
            height: 100%;
            width: 200px;
            background: none;
            outline: none;
            font-weight: 500;
            font-size: 1.01rem;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
          }
          .header-btn img {
            width: 17px;
          }
          .header-btn__border {
            height: 100%;
            width: 3px;
            background: rgba(0, 0, 0, 0.4);
            margin: 0;
            float: right;
            border: none;
          }
          .header-btn:hover {
            background: rgba(255, 255, 255, 0.2);
          }
        `}
      </style>
    </>
  );
};
