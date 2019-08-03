import { css, keyframes } from 'styled-components';
//////////////////////////////////////////////////////////////////////

export const fadeIn = keyframes`
  from {
    opacity:0;
    transform:translateX(50px);
  }
  to {
    opacity: 1;
    transform:translateX(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(50px);
  }
`;

const defaultAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(0);
  }
`;

export const getAnimationName = animationName => {
  switch (animationName) {
    case 'fade-in':
      return fadeIn;
    case 'fade-out':
      return fadeOut;
    default:
      return defaultAnimation;
  }
};

export const animation = ({ animationName, animationProps }) => css`
  animation: ${getAnimationName(animationName)} ${animationProps};
`;
