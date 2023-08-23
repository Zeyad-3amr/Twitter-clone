import { styled } from 'styled-components';

export const Li = styled.li`
  path {
    color: ${({ theme }) => theme.theme.textColor};
  }
  padding-top: 2rem;
`;
