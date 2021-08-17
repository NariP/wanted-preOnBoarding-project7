import VALIDITY_MESSAGE from './constants/validityMessage.js';
import makeStringToNumberArr from './makeStringToNumberArr';

const checkInputValidation = value => {
  const reg = /,{2,}/;
  if (reg.test(value)) return VALIDITY_MESSAGE.INPUT_ERROR_MESSAGE;
  const arr = makeStringToNumberArr(value);
  if (arr.find(v => v > Number.MAX_SAFE_INTEGER || v < Number.MIN_SAFE_INTEGER))
    return VALIDITY_MESSAGE.NOT_SAFE_INTEGER;
  if (!(arr.length > 0 && value.split(',').length === arr.length))
    return VALIDITY_MESSAGE.INPUT_ERROR_MESSAGE;
};

export default checkInputValidation;
