import React from 'react';
import styled from '@emotion/styled';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner.js';

export default function ResultField({ value, color, loading }) {
  if (loading) {
    return (
      <StyledResultField color={color}>
        <LoadingSpinner />
      </StyledResultField>
    );
  }
  return (
    <StyledResultField color={color}>
      {value ? value.join(', ') : ''}
    </StyledResultField>
  );
}

const StyledResultField = styled.p(({ color }) => ({
  width: '100%',
  margin: 'auto',
  fontSize: 20,
  // height: 30,
  backgroundColor: color || '#e1bee7',
}));
