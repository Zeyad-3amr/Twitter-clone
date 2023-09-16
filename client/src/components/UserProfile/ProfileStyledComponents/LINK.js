import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const LINK = styled(Link)`
  padding: 0rem;
  svg {
    padding: 0.5rem;
    &:hover {
      background-color: ${({ theme }) => theme.buttonTheme.hover};
      border-radius: 5rem;
    }
  }
`;
