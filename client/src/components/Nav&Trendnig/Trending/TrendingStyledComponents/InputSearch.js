import { styled } from 'styled-components';

export const InputSearch = styled.input`
  background-color: ${({ theme }) => theme.theme.SbackgroundColor};
  color: ${({ theme }) => theme.theme.textColor};
  font-size: 1.5rem;
  &::placeholder {
    color: ${({ theme }) => theme.theme.placeholder};
    font-size: 1.5rem;
  }
  width: 100%;
  border: none;
  &:focus {
    outline: none;
  }
`;
