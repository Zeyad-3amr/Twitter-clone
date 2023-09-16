import { styled } from 'styled-components';

export const ProfileLoadingDiv = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2rem;
  span {
    color: ${({ theme }) => theme.buttonTheme.color};
  }
`;
