import { keyframes } from "styled-components";
import { getRandomIntUnsafe } from "../../public/scripts/utils/random";

export const getSlider = () => {
  const pos = getRandomIntUnsafe(2978, 3104);
  return keyframes`
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-${pos}px);
    }`;
};
