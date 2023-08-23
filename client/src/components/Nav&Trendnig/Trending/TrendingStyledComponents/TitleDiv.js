import { styled } from 'styled-components';

export const TitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem 1rem 1rem;

  svg {
    color: ${({ theme }) => theme.buttonTheme.color};
    padding: 0.5rem;

    &:hover {
      background-color: ${({ theme }) => theme.buttonTheme.hover};
      border-radius: 5rem;
      cursor: pointer;
      transition: 0.4s;
    }
  }
`;
