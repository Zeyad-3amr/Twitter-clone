import { styled } from 'styled-components';

export const P = styled.p`
  align-self: flex-start;
  font-size: 1.3rem;
  font-weight: bold;
  color: ${({ theme }) => theme.theme.trendsColor};
`;
