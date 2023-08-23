import { styled } from 'styled-components';

export const HomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-width: thin;
  border-style: solid;

  border-color: ${({ theme }) => theme.theme.borderColor};
  border-top: none;
  align items:center;
  width:60%

`;
