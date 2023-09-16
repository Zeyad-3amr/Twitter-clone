import { styled } from 'styled-components';

export const H3 = styled.h3`
  color: ${({ theme }) => theme.theme.textColor};
`;

export const H6 = styled.h6`
  color: ${({ theme, showmore }) =>
    showmore ? theme.buttonTheme.color : theme.theme.trendsColor};
`;
export const H4 = styled.h4`
  color: ${({ theme }) => theme.theme.textColor};
`;
export const H5 = styled.h5`
  color: ${({ theme }) => theme.theme.textColor};
`;
