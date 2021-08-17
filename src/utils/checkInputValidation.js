import makeStringToNumberArr from './makeStringToNumberArr';

const checkValidation = value => {
  const reg = /,{2,}/;
  if (reg.test(value)) return false;
  const arr = makeStringToNumberArr(value);
  return arr.length > 0 && value.split(',').length === arr.length;
};

export default checkValidation;
