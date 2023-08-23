import { styled } from 'styled-components';

export const DoneButtons = styled.button`
  padding: 1rem;
  border: none;
  border-radius: 5rem;
  width: 20%;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  background-color: ${({ theme }) => theme.buttonTheme.color};
  &:hover {
    cursor: pointer;
    transform: scale(1.04);
    transition: 0.2s;
  }
`;
