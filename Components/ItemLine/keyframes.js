import { keyframes } from "styled-components";
import { getRandomInt } from "../../helpers/random";

export const getSlider = () => {
  const pos = getRandomInt(2978, 3104);
  return keyframes`
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-${pos}px);
    }`;
};
