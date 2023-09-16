import { TextareaAutosize } from '@mui/material';
import { styled } from 'styled-components';

export const TextArea = styled(TextareaAutosize)`
width: 100%;
background-color: transparent;
border: none;
outline: none;
font-size: 1.8rem;
padding: 0rem 0rem 0rem 1rem;
margin-top: 2rem;
font-family: inherit;
resize: none;
overflow: hidden;
color: ${({ theme }) => theme.theme.textColor};
&::placeholder {
  color: ${({ theme }) => theme.theme.grey};
}
  @media (min-width: 1281px) {
    font-size: 1.5rem;
  }
`;
