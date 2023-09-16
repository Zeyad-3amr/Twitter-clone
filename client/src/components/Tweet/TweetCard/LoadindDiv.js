import { styled } from 'styled-components';

export const LoadingDiv = styled.div`
  padding-top: 1rem;
  span {
    color: ${({ theme }) => theme.buttonTheme.color};
  }
`;
