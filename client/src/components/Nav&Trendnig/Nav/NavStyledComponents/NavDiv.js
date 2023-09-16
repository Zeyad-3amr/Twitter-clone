import { styled } from 'styled-components';

export const NavDiv = styled.div`
  width: 25%;
  border-right: solid;
  border-color: ${({ theme }) => theme.theme.borderColor};
  border-width: thin;
  min-height: 100vh;
  @media (max-width: 1024px) {
    width: 20%;
  }
`;
