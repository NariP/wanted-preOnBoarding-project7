import React from 'react';
import styled from '@emotion/styled';

const StyledButton = styled.button({
  fontSize: 20,
  width: 60,
  height: 40,
  borderRadius: 10,
  backgroundColor: '#90caf9',

  '&: active': {
    backgroundColor: '#42a5f5',
  },
});

export default function Button({ ...rest }) {
  return <StyledButton {...rest}></StyledButton>;
}
