import { styled, css } from 'styled-components';

const buttonStyles = css`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 2rem;
  width: 30%;
  font-size: 1.8rem;
  border-radius: 1rem;
  border-style: solid;
  border-color: ${({ active, theme }) => (active ? theme.buttonTheme.color : 'grey')};

  svg {
    color: ${({ active, theme }) => (active ? theme.buttonTheme.color : 'grey')};
    background-color: ${({ active, theme }) =>
      active ? theme.buttonTheme.color : 'none'};
    border-radius: 5rem;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const LightButton = styled.button`
  ${buttonStyles}
  background-color: #f7f7f7;
  color: #2c2d34;
`;

export const DimButton = styled.button`
  ${buttonStyles}
  background-color: #0c2335;
  color: #f7f7f7;
`;

export const DarkButton = styled.button`
  ${buttonStyles}
  background-color: #100f0f;
  color: #f7f7f7;
`;
