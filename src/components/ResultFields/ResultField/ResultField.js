import React from 'react';
import styled from '@emotion/styled';
import { LoadingSpinner } from 'components/LoadingSpinner';

export default function ResultField({ value, color, loading }) {
  return (
    <StyledResultField color={color}>
      {!loading ? value : <LoadingSpinner />}
    </StyledResultField>
  );
}

const StyledResultField = styled.span(({ color }) => ({
  display: 'block',
  width: '100%',
  margin: 'auto',
  fontSize: 20,
  backgroundColor: color || '#e1bee7',
}));
