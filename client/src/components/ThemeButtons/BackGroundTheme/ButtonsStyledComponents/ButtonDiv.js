import { styled } from 'styled-components';

export const ButtonsDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.theme.SbackgroundColor};
  padding: 1rem;
  border-radius: 1rem;
`;
