import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input.js';
import checkInputValiation from 'utils/checkInputValidation';
import { INPUT_ERROR_MESSAGE } from 'constants/validityMessage.js';
import { keyframes } from '@emotion/react';
import stringToArr from 'utils/stringToArr.js';

export default function Form({ handleSubmit }) {
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (!errorMessage) return;
    const timer = setTimeout(() => {
      setErrorMessage('');
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [errorMessage]);

  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (!checkInputValiation(value)) {
      setErrorMessage(INPUT_ERROR_MESSAGE);
      return;
    }
    handleSubmit(stringToArr(value));
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <Input required value={value} onChange={handleChange} />
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
});
