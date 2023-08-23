import { styled, css } from 'styled-components';

const buttonStyles = css`
  border-radius: 5rem;
  border: none;
  transition: ease-out 0.2s;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  width: 5rem;
  height: 5rem;
  svg {
    color: white;
  }
`;

export const RedButton = styled.button`
  ${buttonStyles}
  background-color: #e0144c;
`;
export const OrangeButton = styled.button`
  ${buttonStyles}
  background-color: #F86F03;
`;
export const BlueButton = styled.button`
  ${buttonStyles}
  background-color: #1DA1F2;
`;
export const YellowButton = styled.button`
  ${buttonStyles}
  background-color: #FFAC33;
`;
export const PurpleButton = styled.button`
  ${buttonStyles}
  background-color: #794BC4;
`;
export const GreenButton = styled.button`
  ${buttonStyles}
  background-color: #17BF63;
`;
