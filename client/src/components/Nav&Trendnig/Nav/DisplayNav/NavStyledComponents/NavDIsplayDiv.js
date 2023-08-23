import { styled } from 'styled-components';

export const NavDisplayUL = styled.ul`
  width: 100%;
  box-shadow: 0rem 0.3rem 1rem 0.1rem ${({ theme }) => theme.theme.trendsColor};
  // padding: 2.5rem;
  // display: flex;
  // flex-direction: column;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  background-color: ${({ theme }) => theme.theme.PbackgroundColor};
  list-style-type: none;
`;
