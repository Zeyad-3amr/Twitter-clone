import { styled } from 'styled-components';

export const ProfileHeaderDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  path {
    color: ${({ theme }) => theme.buttonTheme.color};
  }
  svg {
    color: ${({ theme }) => theme.buttonTheme.color};
  }
`;
