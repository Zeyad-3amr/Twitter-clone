import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const UserLink = styled(Link)`
  color: ${(props) => (props.username ? 'grey' : props.theme.theme.textColor)};
  margin: 0rem 0.5rem 1rem 0rem;
  font-weight: ${({ bold }) => (bold ? 'bold' : '')};
  padding-top: 0.4rem;
  font-size: 1.5rem;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 1024px) {
    font-size: 1.7rem;
  }
`;
