import { styled } from 'styled-components';

export const MainDiv = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  @media (max-width: 1024px) {
    padding: 0 0 0 0.5rem;
    z-index: 99;
  }
`;
