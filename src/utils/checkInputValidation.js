const checkValidation = value => {
  const reg = /,{2,}/;
  if (reg.test(value)) return false;
  const arr = value
    .split(',')
    .filter(v => v)
    .map(v => +v)
    .filter(v => !isNaN(v));
  return arr.length > 0 && value.split(',').length === arr.length;
};

export default checkValidation;
