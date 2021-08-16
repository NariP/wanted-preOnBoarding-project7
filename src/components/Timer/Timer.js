import React from 'react';
import WEEK from 'constants/week';
import getKST from 'utils/getKST';

// NOTE: format: ko-KR, eu-EU
export default function Timer({ format }) {
  // 1초 간격으로 보여주는걸까?
  // NOTE: state는 없이
  // NOTE: 과제에는 요일까지 밖에 없으므로 시간, 분, 초는 하지말자. 나중에 시간 남으면 하자.
  // NOTE: FullYear, month, date, day
  // const time = locale, format 에 따른 시간 처리하고...

  // const getEnFormat = () => {
  //   const today = getKST();
  //   console.log(today.day);
  //   return `${WEEK['EN'][+today.day]} ${today.month} ${today.date}, ${
  //     today.year
  //   }`;
  // };
  return <div>구경하시죠</div>;
}
