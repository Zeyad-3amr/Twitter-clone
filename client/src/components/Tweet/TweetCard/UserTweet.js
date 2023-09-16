import { styled } from 'styled-components';

export const UserTweet = styled.p`
  color: ${({ theme }) => theme.theme.textColor};
  margin: 0;
  padding: 0.4rem;
  padding-left: 0rem;
  word-break: break-word;

  @media (max-width: 1024px) {
    font-size: 1.7rem;
    word-break: break-word;
  }
`;
