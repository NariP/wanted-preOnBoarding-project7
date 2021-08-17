import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { checkInputValidation, makeStringToNumberArr } from 'utils';
import { TIMER } from 'utils/constants/index';

export default function Form({ handleSubmit }) {
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (!errorMessage) return;
    const timer = setTimeout(() => {
      setErrorMessage('');
    }, TIMER.LOADING);
    return () => {
      clearTimeout(timer);
    };
  }, [errorMessage]);

  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };

  const onSubmit = e => {
    e.preventDefault();
    const validationResult = checkInputValidation(value);
    !!validationResult
      ? setErrorMessage(validationResult)
      : handleSubmit(makeStringToNumberArr(value));
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <Input value={value} onChange={handleChange} />
      {!!errorMessage && (
        <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
      )}
      <Button type="submit">시작</Button>
    </StyledForm>
  );
}

const StyledForm = styled.form({
  margin: 'auto',
  width: '100%',
  backgroundColor: 'white',
  position: 'relative',
});

const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const StyledErrorMessage = styled.p({
  color: '#f06292',
  fontSize: 15,
  animation: `${fadeInOut} 3s forwards`,
  paddingBottom: '.7em',
});
