import { styled } from 'styled-components';

export const FiDiv = styled.div`
  display: flex;
  width: 80%;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  align-self: center;

  svg {
    padding: 0.5rem;
    color: grey;
    border-radius: 100%;
    cursor: pointer;
    transition: 0.4s;
    font-size: 30px;
  }

  svg:nth-child(1) {
    &:hover {
      color: #1da1f2;
      background-color: rgba(29, 161, 242, 0.07);
    }
  }

  svg:nth-child(2) {
    &:hover {
      color: #17bf63;
      background-color: rgba(23, 191, 99, 0.07);
    }
  }

  svg:nth-child(3) {
    &:hover {
      color: #e0245e;
      background-color: rgba(224, 36, 94, 0.07);
    }
  }

  svg:nth-child(4) {
    &:hover {
      color: #1da1f2;
      background-color: rgba(29, 161, 242, 0.07);
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
    svg {
      font-size: 25px;
    }
  }
`;

//
