import { styled } from 'styled-components';

export const TrendDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-top: thin;
  border-top-style: solid;
  border-color: ${({ theme }) => theme.theme.trendBorderColor};
  padding: 1rem;
  &:hover {
    cursor: pointer;
    transition: 0.9s;
    background-color: ${({ theme }) => theme.theme.trendHover};
  }
`;
