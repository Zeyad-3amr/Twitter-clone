import { styled } from 'styled-components';

export const SearchBarDiv = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.theme.SbackgroundColor};
  svg {
    color: ${({ theme }) => theme.theme.placeholder};
  }
  padding: 1rem;
  width: 100%;
  border: none;
  border-radius: 5rem;
`;
