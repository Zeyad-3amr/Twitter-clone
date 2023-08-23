import { styled } from 'styled-components';

export const WhoToFollowDiv = styled.div`
  display: flex;
  width: 100%;
  border-top: thin;
  border-top-style: solid;
  // justify-content: space-between;
  align-items: center;
  border-color: ${({ theme }) => theme.theme.trendBorderColor};
  padding: 1rem;
  &:hover {
    cursor: pointer;
    transition: 0.9s;
    background-color: ${({ theme }) => theme.theme.trendHover};
  }
`;
