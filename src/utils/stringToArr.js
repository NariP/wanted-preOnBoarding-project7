const stringToArr = val => {
  return val
    .split(',')
    .filter(v => v.trim())
    .map(v => +v)
    .filter(v => !isNaN(v));
};

export default stringToArr;
