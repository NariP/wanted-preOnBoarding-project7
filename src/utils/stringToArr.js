const stringToArr = val => {
  return val
    .split(',')
    .filter(v => v)
    .map(v => +v)
    .filter(v => !isNaN(v));
};

export default stringToArr;
