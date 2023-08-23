import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const LINK = styled(Link)`
  display: flex;
  width: 100%;
  border-radius: 4rem;
  align-items: center;
  padding: 0rem 2rem 0rem 2rem;

  &:hover {
    background-color: ${({ theme }) => theme.buttonTheme.hover};
    border-color: ${({ theme }) => theme.buttonTheme.color};
    cursor: pointer;
    H3 {
      color: ${({ theme }) => theme.buttonTheme.color};
    }
    path {
      color: ${({ theme }) => theme.buttonTheme.color};
    }
  }
  path {
    color: ${({ theme }) => theme.theme.textColor};
  }
`;
