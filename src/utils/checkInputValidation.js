import stringToArr from './stringToArr.js';

const checkValidation = value => {
  const reg = /,{2,}/;
  if (reg.test(value)) return false;
  const arr = stringToArr(value);
  // const arr = makeStringToArr(value);
  return arr.length > 0 && value.split(',').length === arr.length;
};

export default checkValidation;
