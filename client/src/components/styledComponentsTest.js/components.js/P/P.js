import { styled } from 'styled-components';

export const P = styled.p`
  color: ${(props) =>
    // props.username ? props.theme.theme.trendsColor : props.theme.theme.textColor};
    props.username ? 'grey' : props.theme.theme.textColor};
  margin: 0rem 0.5rem 1rem 0rem;

  font-weight: ${({ bold }) => (bold ? 'bold' : '')};
  padding-top: 0.4rem;
  font-size: 1.5rem;
`;
