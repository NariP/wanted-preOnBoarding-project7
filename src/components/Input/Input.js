import React from 'react';
import styled from '@emotion/styled';

const StyledInput = styled.input({
  width: '100%',
  height: 50,
  fontSize: 20,
  paddingLeft: 10,
  paddingRight: 10,
});

export default function Input({ ...rest }) {
  return <StyledInput {...rest} />;
}
