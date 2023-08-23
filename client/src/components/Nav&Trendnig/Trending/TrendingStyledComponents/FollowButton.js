import { styled } from 'styled-components';

export const FollowButton = styled.button`
  border-radius: 5rem;
  background-color: inherit;
  color: ${({ theme }) => theme.buttonTheme.color};
  border: thin;
  border-style: solid;
  font-weight: bold;
  width: 7rem;
  // align-self: flex-end;
  padding: 0.5rem;
  // margin: 1rem;
  &:hover {
    cursor: pointer;
    transition: 0.2s;
    background-color: ${({ theme }) => theme.buttonTheme.hover};
  }
`;
