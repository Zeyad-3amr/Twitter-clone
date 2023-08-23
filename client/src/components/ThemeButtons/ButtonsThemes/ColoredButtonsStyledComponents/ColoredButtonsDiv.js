import { styled } from 'styled-components';

export const ColoredButtonsDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.theme.SbackgroundColor};
  padding: 1rem;
  border-radius: 1rem;
  padding: 2rem;
`;
