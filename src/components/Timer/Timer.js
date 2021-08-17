import React from 'react';
import styled from '@emotion/styled';
import { getFormattedTime } from 'utils';

export default function Timer({ format, theme }) {
  const currentTime = getFormattedTime(format);
  return <StyledDiv theme={theme}>{currentTime}</StyledDiv>;
}

const StyledDiv = styled.div(({ theme }) => ({
  background: theme.colors.base,
  padding: '1em',
  fontSize: '2em',
  fontWeight: 800,
  color: theme.colors.point,
}));
