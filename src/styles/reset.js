import { css } from '@emotion/react';

const reset = css({
  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
    fontFamily: 'NanumSquareRound, sans-serif',
  },
  a: {
    textDecoration: 'none',
    color: '#333',
    cursor: 'pointer',
  },
  li: {
    listStyle: 'none',
  },
  button: {
    border: 'none',
    background: 'none',
    cursor: 'pointer',
  },
  input: {
    border: 'none',
  },
  'input: focus': {
    outline: 'none',
  },
});

export default reset;
