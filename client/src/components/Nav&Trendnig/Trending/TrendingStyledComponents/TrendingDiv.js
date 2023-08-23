import { styled } from 'styled-components';

export const TrendingDiv = styled.div`
  background-color: ${({ theme }) => theme.theme.SbackgroundColor};
  width: 100%;
  border-radius: 1.5rem;
  padding-top: 1rem;

  div:nth-child(7) {
    border-bottom-left-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
  }
  &:nth-child(3) div:nth-child(5) {
    border-bottom-left-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
  }
`;
