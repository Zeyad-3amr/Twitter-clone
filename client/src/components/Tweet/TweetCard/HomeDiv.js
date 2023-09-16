import { styled } from 'styled-components';

export const HomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;
