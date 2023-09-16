import { styled } from 'styled-components';

export const TweetCard = styled.div`
  display: flex;
  border-bottom-style: solid;
  border-width: thin;
  border-bottom-color: ${({ theme }) => theme.theme.borderColor};
  padding: 0.5rem;
  gap: 2%;
  align-self: center;
  width: 100%;
  &:hover {
    background-color: ${({ tweet }) => (tweet ? 'none' : ' rgb(150, 150, 150, 0.1)')};
    transition: 0.2s;
  }
`;
