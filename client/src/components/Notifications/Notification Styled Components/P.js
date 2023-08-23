import { styled } from 'styled-components';

export const NotificationP = styled.p`
  color: ${(props) =>
    props.tweet ? props.theme.theme.trendsColor : props.theme.theme.textColor};
  font-size: 1.4rem;
  line-height: 1.5;
`;
