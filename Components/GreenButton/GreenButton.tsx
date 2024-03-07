import React from "react";

type GreenButtonProps = {
  text: String;
  height?: number;
  width?: number;
  onClick: () => void;
  id: string;
  customColor?: string;
}

export const GreenButton = (props: GreenButtonProps) => {
  const styles = (() => {
    let obj = {};
    if (props.height) {
      obj = { ...obj, height: props.height };
    }
    if (props.width) {
      obj = { ...obj, width: props.width };
    }
    if (props.customColor) {
      obj = { ...obj, background: props.customColor };
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
          .green-button:hover{
            background: #5d7d37;
          }
        `}
      </style>
    </>
  );
};
