import { styled } from 'styled-components';

export const Button = styled.button`
  border-radius: 2rem;
  border: none;
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: ${({ theme }) => theme.buttonTheme.color};
  color: #ffffff;
  width: ${({ tweet }) => (tweet ? '20%' : '31%')};
  margin: 1rem;
  &:hover {
    cursor: pointer;
    transition: 0.5s;
  }
`;
