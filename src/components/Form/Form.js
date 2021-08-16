import React, { useState } from 'react';
import styled from '@emotion/styled';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input.js';

export default function Form({ handleSubmit }) {
  const [value, setValue] = useState('');

  const handleChange = ({ target }) => {
    const { value } = target;
    setValue(value);
  };

  const onSubmit = e => {
    e.preventDefault();
    handleSubmit(value);
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <Input required value={value} onChange={handleChange} />
      <Button type="submit">시작</Button>
    </StyledForm>
  );
}

const StyledForm = styled.form({
  margin: 'auto',
  width: '100%',
  backgroundColor: 'white',
});
