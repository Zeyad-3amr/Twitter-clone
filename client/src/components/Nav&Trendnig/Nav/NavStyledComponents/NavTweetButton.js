import { styled } from 'styled-components';

export const NavTweetButton = styled.button`
  border-radius: 2rem;
  border: none;
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: ${({ theme }) => theme.buttonTheme.color};
  color: #ffffff;
  width: 20rem;
  margin: 1rem;
  &:hover {
    cursor: pointer;
  }
`;
