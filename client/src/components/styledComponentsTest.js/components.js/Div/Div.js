import { styled } from 'styled-components';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
  padding-top: ${(props) => (props.signup ? '10%' : props.signin ? '15%' : '0%')};
  @media (max-width: 1024px) {
    padding-top: ${(props) => (props.signup ? '10rem' : props.signin ? '18rem' : '0%')};
  }
`;
