import { styled } from 'styled-components';

export const EditProfileButton = styled.button`
  color: ${({ theme }) => theme.buttonTheme.color};
  border-radius: 5rem;
  background-color: inherit;
  border: thin;
  border-style: solid;
  font-weight: 900;
  padding: 0.5rem 1rem 0.5rem 1rem;
  &:hover {
    cursor: pointer;
    transition: 0.2s;
    background-color: ${({ theme }) => theme.buttonTheme.hover};
  }
`;
