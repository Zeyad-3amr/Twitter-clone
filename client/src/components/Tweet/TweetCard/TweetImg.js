import styled from 'styled-components';

export const TweetImg = styled.img`
  position: absolute;
  height: auto;
  max-width: 90%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0rem 0rem 2rem black;

  @media (max-width: 1024px) {
    height: auto;
    width: auto;
  }
`;
