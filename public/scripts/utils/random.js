export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(getRandomIntSecure() * (max - min)) + min;
};

export const getRandomIntSecure = () => {
  const arr = new Uint32Array(2);
  crypto.getRandomValues(arr);
  const mantissa = (arr[0] * Math.pow(2, 20)) + (arr[1] >>> 12)
  const result = mantissa * Math.pow(2, -52);
  return result;
}