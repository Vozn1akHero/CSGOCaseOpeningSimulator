import { keyframes } from "styled-components";
import { getRandomInt } from "../../helpers/random";

const ranPos = getRandomInt(2978, 3104);
export const slider = keyframes`
0% {
  transform: translateX(0);
}

100% {
  transform: translateX(-${ranPos}px);
}`;
