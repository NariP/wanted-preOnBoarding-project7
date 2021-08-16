import React from 'react';
import getFormattedTime from 'utils/getFormattedTime';
import styled from '@emotion/styled';

// NOTE: format: KO, EN
export default function Timer({ format }) {
  // 1초 간격으로 보여주는걸까?
  // NOTE: state는 없이
  // NOTE: 과제에는 요일까지 밖에 없으므로 시간, 분, 초는 하지말자. 나중에 시간 남으면 하자.
  // NOTE: FullYear, month, date, day
  // const time = locale, format 에 따른 시간 처리하고...

  const currentTime = getFormattedTime[format]();

  return <StyledDiv>{currentTime}</StyledDiv>;
}
const StyledDiv = styled.div({
  background: '#037e8f',
  padding: '1em',
  fontFamily: 'NanumSquareRound, sans-serif',
  fontSize: '2em',
  fontWeight: 800,
  color: 'white',
});
