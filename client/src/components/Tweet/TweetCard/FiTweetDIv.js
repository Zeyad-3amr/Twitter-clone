import { styled } from 'styled-components';

export const FiTweetDiv = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
  svg {
    padding: 0.5rem;
    color:${({ theme }) => theme.buttonTheme.color};
    border-radius: 100%;
    cursor: pointer;
    transition: 0.4s;
    &:hover {
      background-color: ${({ theme }) => theme.buttonTheme.hover};
  }

  

`;

//
