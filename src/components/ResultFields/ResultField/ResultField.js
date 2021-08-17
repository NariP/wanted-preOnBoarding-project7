import React from 'react';
import styled from '@emotion/styled';
import { LoadingSpinner } from 'components/LoadingSpinner';

export default function ResultField({ value, loading, theme }) {
  const isDisplay = value || loading;
  return (
    <StyledResultField isDisplay={isDisplay} theme={theme}>
      {!loading ? value : <LoadingSpinner />}
    </StyledResultField>
  );
}

const StyledResultField = styled.span(({ isDisplay, theme }) => ({
  display: isDisplay ? 'block' : 'none',
  width: '100%',
  margin: 'auto',
  padding: '.5em',
  fontSize: '1.5em',
  backgroundColor: theme.colors.base,
  borderBottom: '1px solid rgba(0,0,0,.2)',
  maxHeight: 200,
  overflowY: 'scroll',
}));
