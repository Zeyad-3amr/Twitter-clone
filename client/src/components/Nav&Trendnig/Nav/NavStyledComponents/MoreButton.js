import { styled } from 'styled-components';

export const MoreButton = styled.button`
  display: flex;
  width: 100%;
  border-radius: 4rem;
  align-items: center;
  padding: 0rem 2rem 0rem 2rem;
  background-color: inherit;
  font-size: 1.8rem;
  border: none;
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
