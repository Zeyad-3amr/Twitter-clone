import { styled } from 'styled-components';

export const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  path {
    color: ${({ theme }) => theme.buttonTheme.color};
  }
  svg {
    color: ${({ theme }) => theme.buttonTheme.color};
  }
  width: 100%;
`;
