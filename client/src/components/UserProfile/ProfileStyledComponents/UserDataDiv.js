import { styled } from 'styled-components';

export const UserDataDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 1rem;
  padding: 1rem;
  border-bottom: thin;
  border-bottom-style: solid;
  border-color: ${({ theme }) => theme.theme.borderColor};
`;
