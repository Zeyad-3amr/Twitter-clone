import { styled } from 'styled-components';

export const DisplayButton = styled.button`
  display: flex;
  align-items: center;
  padding: 2rem;
  border: none;
  background-color: inherit;
  width: 100%;
  svg {
    color: grey;
    margin-right: 1rem;
  }
  p {
    color: ${({ theme }) => theme.theme.textColor};
    font-size: 1.6rem;
    font-weight: bold;
  }
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.theme.SbackgroundColor};
    transition: 0.5s;
  }
`;
