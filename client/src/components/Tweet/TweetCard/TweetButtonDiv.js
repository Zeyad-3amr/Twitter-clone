import { styled } from 'styled-components';

export const FiTweetDiv2 = styled.div`
  display: flex;
  width: 45%;
  justify-content: space-between;
  font-size: 32px;

  @media (max-width: 1024px) {
    font-size: 30px;
    width: 55%;
  }
`;
