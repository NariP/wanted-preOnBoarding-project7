import React from 'react';
import styled from '@emotion/styled';

export default function Button({ ...rest }) {
  return <StyledButton {...rest} />;
}
const StyledButton = styled.button(({ theme }) => ({
  fontSize: 20,
  fontWeight: 600,
  height: 40,
  width: '100%',
  backgroundColor: theme.colors.point,
  color: '#FCF6F5',
  '&: active': {
    backgroundColor: '#42a5f5',
  },
}));
