const quickSort = value => {
  value = value.map(ele => +ele);
  // value 의 요소가 하나이면 value 바로 반환
  if (value.length < 2) return value;

  // quickSort 의 초기 배열을 선언 첫 pivot 배열의 첫번째 요소
  let pivot = [value[0]],
    left = [],
    right = [];

  // 반복문을 돌면서 pivot 보다 작은건 left 큰건 right 그렇지 않은 것은 pivot 에 넣어줌
  value.forEach((num, idx) => {
    if (idx > 0) {
      if (num < pivot[0]) left.push(num);
      else if (num > pivot[0]) right.push(num);
      else pivot.push(num);
    }
  });
  return quickSort(left).concat(pivot, quickSort(right));
};
export default quickSort;
