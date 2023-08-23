import { styled } from 'styled-components';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${(props) => (props.signup ? '10%' : props.signin ? '15%' : '0%')};
`;
