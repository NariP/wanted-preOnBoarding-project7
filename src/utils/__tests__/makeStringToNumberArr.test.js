import { makeStringToNumberArr } from 'utils';

describe('makeStringToNumberArr Test', () => {
  it('Should be [1,2,3,4] when input is 1,2,3,4', () => {
    expect(makeStringToNumberArr('1,2,3,4')).toEqual([1, 2, 3, 4]);
  });
  it('Should be ignored comma used consecutively', () => {
    expect(makeStringToNumberArr('1,2,3,4,,')).toEqual([1, 2, 3, 4]);
  });
  it('Should be removed non-numeric values exists', () => {
    expect(makeStringToNumberArr('1,2,3,4,,')).toEqual([1, 2, 3, 4]);
  });
});
