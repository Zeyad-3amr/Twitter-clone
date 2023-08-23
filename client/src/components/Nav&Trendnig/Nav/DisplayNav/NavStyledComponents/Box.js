import { styled } from 'styled-components';

export const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  background-color: ${({ theme }) => theme.theme.PbackgroundColor};
  box-shadow: 0rem 0rem 2rem grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-radius: 2rem;
  gap: 1rem;
`;
