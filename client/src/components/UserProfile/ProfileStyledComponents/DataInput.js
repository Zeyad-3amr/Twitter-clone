import { styled } from 'styled-components';

export const UserInput = styled.input`
  width: 100%;
  // margin: 1rem 0 1rem 0;
  border: none;
  border-bottom: thin;
  border-color: ${({ theme }) => theme.buttonTheme.color};
  border-bottom-style: solid;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.theme.SbackgroundColor};
  color: ${({ theme }) => theme.theme.textColor};
`;
