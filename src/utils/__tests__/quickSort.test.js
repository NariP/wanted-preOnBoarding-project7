import { quickSort } from 'utils';

describe('QuickSort Test', () => {
  it('Should be [1,2,3,4] when input is [4,3,2,1]', () => {
    expect(quickSort([4, 3, 2, 1])).toEqual([1, 2, 3, 4]);
  });
  it('Should be equal when comparing to Array.sort', () => {
    const arr = [1, 23, 123, 12, 3, 324, 1, 234, 123, 412, 34];
    const mine = quickSort(arr);
    const sort = arr.sort((a, b) => a - b);
    expect(mine).toEqual(sort);
  });
});
