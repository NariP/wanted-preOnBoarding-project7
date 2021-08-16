import React from 'react';
import styled from '@emotion/styled';

const StyledButton = styled.button({
  fontSize: 20,
  height: 40,
  width: '100%',
  backgroundColor: '#7b9acc',
  border: '1px solid white',
  color: '#FCF6F5',
  '&: active': {
    backgroundColor: '#42a5f5',
  },
});

export default function Button({ ...rest }) {
  return <StyledButton {...rest}></StyledButton>;
}
