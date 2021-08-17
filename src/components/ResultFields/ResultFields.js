import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { TIMER } from 'utils/constants';
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
    }, TIMER.POPUP);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);
  return (
    <StyledResultFields>
      <ResultField value={value.join(', ')} />
      <ResultField loading={isLoading} value={reversedValue.join(', ')} />
    </StyledResultFields>
  );
}

const StyledResultFields = styled.div({
  width: '100%',
  margin: 'auto',
});
