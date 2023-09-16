import { styled } from 'styled-components';

export const SaveCancelDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: ${(props) => (props.not ? '2rem' : '1rem')};
  margin: 1rem;
  gap: 1rem;
`;
