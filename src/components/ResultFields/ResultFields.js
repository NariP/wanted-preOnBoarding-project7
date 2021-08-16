import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import ResultField from './ResultField/ResultField.js';

export default function ResultFields({ value }) {
  const [reversedValue, setReversedValue] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!value) return;
    setIsLoading(true);

    const timer = setTimeout(() => {
      setReversedValue([...value].reverse());
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return (
    <StyledResultFields>
      <ResultField value={value} color="#f3e5f5" />
      <ResultField loading={isLoading} value={reversedValue} color="#e8eaf6" />
    </StyledResultFields>
  );
}

const StyledResultFields = styled.div({
  width: '100%',
  margin: 'auto',
});
