import { styled } from 'styled-components';

export const ColumnDiv = styled.div`
  width: 35%;
  padding: 0.5rem 0 0 2rem;
  border-left: solid;
  border-color: ${({ theme }) => theme.theme.borderColor};
  border-width: thin;
  min-height: 100vh;
  @media (max-width: 1024px) {
    display: none;
  }
`;
