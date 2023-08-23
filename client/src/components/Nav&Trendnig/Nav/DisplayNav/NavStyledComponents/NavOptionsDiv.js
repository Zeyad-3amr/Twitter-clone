import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const NavOptionsLINK = styled(Link)`
  display: flex;
  align-items: center;
  padding: 2rem;
  svg {
    // padding: 1rem;
    color: grey;
    margin-right: 1rem;
  }
  h4 {
    color: ${({ theme }) => theme.theme.textColor};
  }
  &:hover {
    background-color: ${({ theme }) => theme.theme.SbackgroundColor};
    transition: 0.5s;
  }
`;
