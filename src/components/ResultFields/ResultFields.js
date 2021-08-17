import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { ResultField } from './ResultField';

export default function ResultFields({ value }) {
  const [reversedValue, setReversedValue] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!value.length) return;
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
      <ResultField value={value.join(', ')} color="#f3e5f5" />
      <ResultField
        loading={isLoading}
        value={reversedValue.join(', ')}
        color="#e8eaf6"
      />
    </StyledResultFields>
  );
}

const StyledResultFields = styled.div({
  width: '100%',
  margin: 'auto',
});
