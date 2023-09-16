import { styled } from 'styled-components';

export const CoverImg = styled.img`
  width: 100%;
  height: 30rem;
`;

export const DivPhoto = styled.div`
  display: flex;
  position: relative;
  z-index: 1;
`;

export const Img = styled.img`
  width: 15rem;
  height: 15rem;
  top: -9rem;
  left: 2rem;
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  border: 4.5px solid ${({ theme }) => theme.theme.PbackgroundColor};

  @media (max-width: 1024px) {
    z-index: 1;
  }
`;
