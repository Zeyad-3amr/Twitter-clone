import { styled } from 'styled-components';

export const H3 = styled.h3`
  color: ${({ theme }) => theme.theme.textColor};
  padding: 1rem;
  @media (max-width: 1024px) {
    display: ${({ leftnav }) => (leftnav ? 'none' : '')};
  }
`;
