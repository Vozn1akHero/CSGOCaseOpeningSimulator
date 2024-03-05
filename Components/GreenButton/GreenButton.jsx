import React from "react";

export const GreenButton = (props) => {
  const styles = (() => {
    let obj = {};
    if (props.height) {
      obj = { ...obj, height: props.height };
    }
    if (props.width) {
      obj = { ...obj, width: props.width };
    }
    return obj;
  })();

  return (
    <>
      <button id={props.id}
        onClick={() => {
          props.onClick();
        }}
        style={styles}
        className='green-button'
      >
        {props.text}
      </button>
      <style jsx>
        {`
          .green-button {
            display: block;
            margin-left: auto;
            margin-right: auto;
            margin-top: 1rem;
            background: #507325;
            border: none;
            width: 11rem;
            height: 34px;
            color: white;
            box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.75);
            outline: none;
          }
          .green-button :active {
            color: black;
          }
        `}
      </style>
    </>
  );
};
