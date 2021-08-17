import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

export default function LoadingSpinner() {
  return (
    <StyledLoadingSpinner className="lds-ellipsis">
      <Wave />
      <Wave />
      <Wave />
      <Wave />
    </StyledLoadingSpinner>
  );
}

const ldsEllipsis1 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;
const ldsEllipsis2 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
`;
const ldsEllipsis3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

const StyledLoadingSpinner = styled.div({
  display: 'inline-block',
  position: 'relative',
  width: 80,
  height: 40,

  '& div:nth-of-type(1)': {
    left: 8,
    animation: `${ldsEllipsis1} 0.6s infinite`,
  },
  '& div:nth-of-type(2)': {
    left: 8,
    animation: `${ldsEllipsis2} 0.6s infinite`,
  },
  '& div:nth-of-type(3)': {
    left: 32,
    animation: `${ldsEllipsis2} 0.6s infinite`,
  },
  '& div:nth-of-type(4)': {
    left: 56,
    animation: `${ldsEllipsis3} 0.6s infinite`,
  },
});

const Wave = styled.div({
  position: 'absolute',
  top: 15,
  width: 13,
  height: 13,
  borderRadius: '50%',
  background: '#fff',
  animationTimingFunction: 'cubic-bezier(0, 1, 1, 0)',
});
