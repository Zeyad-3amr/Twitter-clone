import { styled } from 'styled-components';

export const Input = styled.input`
  width: 31%;
  padding: 1.3rem;
  margin-bottom: 1rem;
  border: none;
  font-size: 1.3rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.theme.SbackgroundColor};
  color: ${({ theme }) => theme.theme.textColor};
  &::placeholder {
    color: ${({ theme }) => theme.theme.placeholder};
  }
  &:focus {
    outline: none;
  }
`;
