import styled from 'styled-components';

export const DivMain = styled.div`
  background-color: ${({ theme }) => theme.theme.PbackgroundColor};
  width: 100%;
  min-height: 100vh;
  @media (max-width: 1024px) {
    div:nth-child(1) {
      padding-left: 0px;
      padding-right: 0px;
    }
  }
`;
