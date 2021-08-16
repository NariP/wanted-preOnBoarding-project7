import React, { useEffect, useState } from 'react';
import ResultField from './ResultField/ResultField.js';

export default function ResultFields({ value }) {
  // NOTE: 3초 뒤에 띄어야한다.
  const [reversedValue, setReversedValue] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // NOTE: isLoading 을 어디다 사용할 것인가?

  useEffect(() => {
    // NOTE: 함수로 뺄까?
    setIsLoading(true);

    // return clear 하는거까지
    const timer = setTimeout(() => {
      setReversedValue([...value].reverse());
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return (
    <div>
      <ResultField value={value} className="a" />
      {isLoading && <div>Loading</div>}
      {!isLoading && <ResultField value={reversedValue} />}
    </div>
  );
}
